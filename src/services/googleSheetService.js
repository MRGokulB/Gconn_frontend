const CACHE_KEY = 'gconn_events_cache';
const CACHE_STALE_KEY = 'gconn_events_stale';
const CACHE_TTL = 5 * 60 * 1000;
const STALE_TTL = 60 * 60 * 1000;
const FETCH_TIMEOUT = 8000;

function getSheetURL() {
  return (import.meta.env.VITE_EVENTS_SHEET_URL || '').trim();
}

function convertDriveToDirectURL(url) {
  if (!url) return '';
  const trimmed = url.trim();

  const patterns = [
    /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }

  return trimmed;
}

function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function parseCSVLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current);
  return fields;
}

function splitCSVRows(text) {
  const rows = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      current += ch;
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (current.trim()) rows.push(current);
      current = '';
      if (ch === '\r' && text[i + 1] === '\n') i++;
    } else {
      current += ch;
    }
  }
  if (current.trim()) rows.push(current);
  return rows;
}

function parseSheetCSV(csvText) {
  const lines = splitCSVRows(csvText);
  if (lines.length < 2) return [];

  const headerFields = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));

  const colMap = {};
  const requiredCols = ['event_id', 'title', 'media_url'];
  const optionalCols = ['short_title', 'description', 'media_type', 'caption', 'order'];

  [...requiredCols, ...optionalCols].forEach(col => {
    const idx = headerFields.indexOf(col);
    if (idx !== -1) colMap[col] = idx;
  });

  const missingRequired = requiredCols.filter(col => colMap[col] === undefined);
  if (missingRequired.length > 0) {
    console.warn(`[EventsCMS] Missing required columns: ${missingRequired.join(', ')}`);
    return [];
  }

  const eventsMap = new Map();

  for (let i = 1; i < lines.length; i++) {
    const fields = parseCSVLine(lines[i]);
    const get = (col) => (colMap[col] !== undefined ? (fields[colMap[col]] || '').trim() : '');

    const eventId = get('event_id');
    const mediaUrl = get('media_url');
    if (!eventId || !mediaUrl) continue;

    if (!eventsMap.has(eventId)) {
      eventsMap.set(eventId, {
        id: eventId,
        title: get('title'),
        shortTitle: get('short_title') || get('title'),
        description: get('description'),
        order: parseInt(get('order') || '0', 10) || i,
        media: [],
      });
    }

    const rawType = get('media_type').toLowerCase() || 'image';
    const youtubeId = extractYouTubeId(mediaUrl);

    if (youtubeId) {
      eventsMap.get(eventId).media.push({
        type: 'youtube',
        src: `https://www.youtube.com/embed/${youtubeId}`,
        youtubeId,
        caption: get('caption'),
      });
    } else if (rawType === 'video') {
      eventsMap.get(eventId).media.push({
        type: 'video',
        src: convertDriveToDirectURL(mediaUrl),
        caption: get('caption'),
      });
    } else {
      eventsMap.get(eventId).media.push({
        type: 'image',
        src: convertDriveToDirectURL(mediaUrl),
        caption: get('caption'),
      });
    }
  }

  return Array.from(eventsMap.values()).sort((a, b) => a.order - b.order);
}

function getCache(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
  } catch { /* storage full */ }
}

function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
}

export async function fetchEventsFromSheet() {
  const sheetUrl = getSheetURL();
  if (!sheetUrl) return null;

  const fresh = getCache(CACHE_KEY);
  if (fresh && (Date.now() - fresh.ts) < CACHE_TTL) {
    return fresh.data;
  }

  const stale = getCache(CACHE_STALE_KEY);

  try {
    const res = await fetchWithTimeout(sheetUrl, FETCH_TIMEOUT);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const csv = await res.text();
    const events = parseSheetCSV(csv);

    if (events.length > 0) {
      setCache(CACHE_KEY, events);
      setCache(CACHE_STALE_KEY, events);
      return events;
    }

    return stale?.data || null;
  } catch (err) {
    console.warn('[EventsCMS] Fetch failed, using stale cache:', err.message);
    return stale?.data || null;
  }
}
