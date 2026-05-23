const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/+$/, '');
const CACHE_KEY = 'gconn_events_v3';
const CACHE_TTL = 3 * 60 * 1000;
const TOKEN_KEY = 'gconn_auth_token';

function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function normalizeMedia(media) {
  return (media || []).map(m => {
    const ytId = extractYouTubeId(m.src);
    if (ytId || m.type === 'youtube') {
      const id = ytId || m.youtubeId;
      return { ...m, type: 'youtube', src: `https://www.youtube.com/embed/${id}`, youtubeId: id };
    }
    return m;
  });
}

function processEvents(events) {
  return (events || []).map(ev => ({
    ...ev,
    media: normalizeMedia(ev.media),
  }));
}

function getCached() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch { return null; }
}

function setCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() })); } catch {}
}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || '';
}

function setToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const headers = { ...options.headers };

  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed: ${res.status}`);
  }

  return res.json();
}

async function fetchAllEvents() {
  const events = await apiFetch('/events');
  const processed = processEvents(events);
  setCache(processed);
  return processed;
}

export async function fetchEvents(skipCache = false) {
  if (!skipCache) {
    const cached = getCached();
    if (cached) return cached;
  }
  try {
    return await fetchAllEvents();
  } catch (err) {
    console.warn('[EventsAPI] Fetch failed:', err.message);
    return getCached() || null;
  }
}

export async function verifyPassword(email, password) {
  try {
    const res = await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.token) {
      setToken(res.token);
      return true;
    }
    return false;
  } catch {
    clearToken();
    return false;
  }
}

export async function createEvent(_email, _password, eventData) {
  await apiFetch('/events', {
    method: 'POST',
    body: JSON.stringify({
      eventId: eventData.eventId,
      title: eventData.title,
      shortTitle: eventData.shortTitle || eventData.title,
      description: eventData.description || '',
      order: eventData.order || 0,
    }),
  });
  return fetchAllEvents();
}

export async function updateEvent(_email, _password, eventData) {
  const updates = {};
  if (eventData.title !== undefined) updates.title = eventData.title;
  if (eventData.shortTitle !== undefined) updates.shortTitle = eventData.shortTitle;
  if (eventData.description !== undefined) updates.description = eventData.description;
  if (eventData.order !== undefined) updates.order = eventData.order;

  await apiFetch(`/events/${eventData.eventId}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
  });
  return fetchAllEvents();
}

export async function deleteEvent(_email, _password, eventId) {
  await apiFetch(`/events/${eventId}`, { method: 'DELETE' });
  return fetchAllEvents();
}

export async function addMediaToEvent(_email, _password, eventId, mediaUrl, mediaType, caption) {
  await apiFetch(`/events/${eventId}/media`, {
    method: 'POST',
    body: JSON.stringify({
      mediaUrl,
      mediaType: mediaType || 'image',
      caption: caption || '',
    }),
  });
  return fetchAllEvents();
}

export async function deleteMediaFromEvent(_email, _password, eventId, mediaIndex) {
  await apiFetch(`/events/${eventId}/media/${mediaIndex}`, { method: 'DELETE' });
  return fetchAllEvents();
}

export async function uploadMediaToEvent(_email, _password, eventId, file, caption) {
  const formData = new FormData();
  formData.append('file', file);
  if (caption) formData.append('caption', caption);

  await apiFetch(`/events/${eventId}/media/upload`, {
    method: 'POST',
    body: formData,
  });
  return fetchAllEvents();
}

export function isApiConfigured() {
  return !!API_BASE;
}
