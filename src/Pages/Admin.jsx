import React, { useState, useEffect, useCallback } from 'react';
import { FaPlus, FaTrash, FaPen, FaImage, FaVideo, FaSignOutAlt, FaTimes, FaCheck, FaSpinner } from 'react-icons/fa';
import {
  fetchEvents, verifyPassword, createEvent, updateEvent,
  deleteEvent, addMediaToEvent, deleteMediaFromEvent, uploadMediaToEvent, isApiConfigured
} from '../services/eventsApi';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  const colors = type === 'error' ? 'bg-red-600' : 'bg-emerald-600';
  return (
    <div className={`fixed top-6 right-6 z-50 ${colors} text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-pulse`}>
      {type === 'error' ? <FaTimes className="w-4 h-4" /> : <FaCheck className="w-4 h-4" />}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

const LoginScreen = ({ onLogin, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const ok = await onLogin(email, password);
    if (!ok) setError('Invalid email or password');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-sm shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Admin Panel</h2>
          <p className="text-blue-200 text-sm">GCONN Events Management</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin Email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            autoFocus
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin Password"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-medium transition-all duration-200"
          >
            {loading ? <FaSpinner className="w-4 h-4 animate-spin mx-auto" /> : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

const EventForm = ({ event, onSubmit, onCancel, loading }) => {
  const [form, setForm] = useState({
    eventId: event?.id || '',
    title: event?.title || '',
    shortTitle: event?.shortTitle || '',
    description: event?.description || '',
    order: event?.order || 1,
  });

  const isEdit = !!event;
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (!isEdit && !form.eventId.trim()) {
      set('eventId', form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, ''));
    }
    onSubmit({
      ...form,
      eventId: form.eventId || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, ''),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">{isEdit ? 'Edit Event' : 'New Event'}</h3>
          <button onClick={onCancel} className="text-slate-400 hover:text-slate-600"><FaTimes /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!isEdit && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Event ID</label>
              <input value={form.eventId} onChange={e => set('eventId', e.target.value)}
                placeholder="auto-generated from title" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none" />
              <p className="text-xs text-slate-400 mt-1">Unique identifier (e.g., annual-day-2026)</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title *</label>
            <input value={form.title} onChange={e => set('title', e.target.value)} required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Short Title (tab label)</label>
            <input value={form.shortTitle} onChange={e => set('shortTitle', e.target.value)}
              placeholder={form.title || 'Short name for the tab'}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none resize" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Display Order</label>
            <input type="number" min="1" value={form.order} onChange={e => set('order', e.target.value === '' ? '' : parseInt(e.target.value) || 1)}
              className="w-24 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none" />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onCancel} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition">Cancel</button>
            <button type="submit" disabled={loading}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition disabled:opacity-50 flex items-center gap-2">
              {loading ? <FaSpinner className="w-3 h-3 animate-spin" /> : null}
              {isEdit ? 'Save Changes' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AddMediaForm = ({ eventId, onSubmit, onUpload, onCancel, loading }) => {
  const [tab, setTab] = useState('upload'); // 'upload' or 'url'
  const [url, setUrl] = useState('');
  const [type, setType] = useState('image');
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === 'url') {
      if (!url.trim()) return;
      onSubmit(eventId, url.trim(), type, caption.trim());
    } else {
      if (!file) return;
      onUpload(eventId, file, caption.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Add Media</h3>
          <button onClick={onCancel} className="text-slate-400 hover:text-slate-600"><FaTimes /></button>
        </div>
        
        <div className="flex border-b border-slate-200">
          <button onClick={() => setTab('upload')} className={`flex-1 py-3 text-sm font-medium transition-colors ${tab === 'upload' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>Upload File</button>
          <button onClick={() => setTab('url')} className={`flex-1 py-3 text-sm font-medium transition-colors ${tab === 'url' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>Paste URL</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {tab === 'upload' ? (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Select File *</label>
              <input type="file" accept="image/*,video/*" onChange={e => setFile(e.target.files[0])} required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              <p className="text-xs text-slate-400 mt-1">File will be uploaded automatically to Cloudinary.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Media URL *</label>
                <input value={url} onChange={e => setUrl(e.target.value)} required={tab === 'url'}
                  placeholder="Google Drive link or YouTube URL"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                <div className="flex gap-3">
                  {['image', 'video'].map(t => (
                    <button key={t} type="button" onClick={() => setType(t)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${type === t ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                      {t === 'image' ? <FaImage className="w-3 h-3" /> : <FaVideo className="w-3 h-3" />}
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Caption (optional)</label>
            <input value={caption} onChange={e => setCaption(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none" />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onCancel} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition">Cancel</button>
            <button type="submit" disabled={loading || (tab === 'url' ? !url.trim() : !file)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition disabled:opacity-50 flex items-center gap-2">
              {loading ? <FaSpinner className="w-3 h-3 animate-spin" /> : (tab === 'upload' ? 'Upload' : <FaPlus className="w-3 h-3" />)}
              {tab === 'upload' ? (loading ? 'Uploading...' : 'Upload Media') : 'Add Media'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ConfirmDialog = ({ title, message, onConfirm, onCancel, loading }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-6">{message}</p>
      <div className="flex justify-end gap-3">
        <button onClick={onCancel} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition">Cancel</button>
        <button onClick={onConfirm} disabled={loading}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg font-medium transition disabled:opacity-50 flex items-center gap-2">
          {loading ? <FaSpinner className="w-3 h-3 animate-spin" /> : <FaTrash className="w-3 h-3" />}
          Delete
        </button>
      </div>
    </div>
  </div>
);

const EventTableRow = ({ event, onEdit, onDelete, onAddMedia, onDeleteMedia, loading }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className="hover:bg-slate-50/50 transition-colors group">
        <td className="px-5 py-4 align-top w-16">
          <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md font-bold">{event.order}</span>
        </td>
        <td className="px-5 py-4 align-top">
          <div className="font-semibold text-slate-800 text-base">{event.title}</div>
          <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
            <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">ID: {event.id}</span>
            <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">Tab: {event.shortTitle}</span>
          </div>
          {event.description && <div className="text-sm text-slate-500 mt-2 line-clamp-2">{event.description}</div>}
        </td>
        <td className="px-5 py-4 align-top text-center w-32">
          <button 
            onClick={() => setExpanded(!expanded)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors w-full flex items-center justify-center gap-1.5 ${expanded ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {event.media?.length || 0} Media {expanded ? '▲' : '▼'}
          </button>
        </td>
        <td className="px-5 py-4 align-top text-right w-28">
          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onEdit(event)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Edit Event">
              <FaPen className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onDelete(event)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete Event">
              <FaTrash className="w-3.5 h-3.5" />
            </button>
          </div>
        </td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan="4" className="p-0 border-t-0 border-b border-slate-100">
            <div className="bg-slate-50/80 px-6 py-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Event Media</h5>
                <button onClick={() => onAddMedia(event.id)} className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition">
                  <FaPlus className="w-2.5 h-2.5" /> Add Media
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {(event.media || []).map((m, i) => (
                  <div key={i} className="relative group w-24 h-24 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
                    {m.type === 'youtube' ? (
                      <img src={`https://img.youtube.com/vi/${m.youtubeId}/mqdefault.jpg`} alt="" className="w-full h-full object-cover" />
                    ) : m.type === 'video' ? (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center"><FaVideo className="text-slate-400 w-5 h-5" /></div>
                    ) : (
                      <img src={m.src} alt="" className="w-full h-full object-cover" onError={e => { e.target.style.display = 'none'; }} />
                    )}
                    <button onClick={() => onDeleteMedia(event.id, i)}
                      className="absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700" title="Remove Media">
                      <FaTimes className="w-2.5 h-2.5" />
                    </button>
                    {m.caption && <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] px-1.5 py-1 truncate" title={m.caption}>{m.caption}</div>}
                  </div>
                ))}
                {(event.media || []).length === 0 && (
                  <div className="text-sm text-slate-400 italic py-2">No media attached to this event.</div>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [showEventForm, setShowEventForm] = useState(null);
  const [showMediaForm, setShowMediaForm] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [confirmMediaDelete, setConfirmMediaDelete] = useState(null);

  const showToast = useCallback((message, type = 'success') => setToast({ message, type }), []);

  const loadEvents = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchEvents(true);
      if (data) setEvents(data);
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  }, [showToast]);

  const handleLogin = async (em, pw) => {
    setLoading(true);
    try {
      const ok = await verifyPassword(em, pw);
      if (ok) { 
        setEmail(em); 
        setPassword(pw); 
        setAuthenticated(true); 
        sessionStorage.setItem('gconn_admin_em', em); 
        sessionStorage.setItem('gconn_admin_pw', pw); 
        await loadEvents(); 
      }
      return ok;
    } catch { return false; }
    finally { setLoading(false); }
  };

  useEffect(() => {
    const savedEm = sessionStorage.getItem('gconn_admin_em');
    const savedPw = sessionStorage.getItem('gconn_admin_pw');
    if (savedEm && savedPw) { 
      setEmail(savedEm); 
      setPassword(savedPw); 
      setAuthenticated(true); 
    }
  }, []);

  useEffect(() => { if (authenticated) loadEvents(); }, [authenticated, loadEvents]);

  const handleLogout = () => {
    setAuthenticated(false);
    setEmail('');
    setPassword('');
    sessionStorage.removeItem('gconn_admin_em');
    sessionStorage.removeItem('gconn_admin_pw');
  };

  const handleCreateEvent = async (data) => {
    setLoading(true);
    try {
      const updated = await createEvent(email, password, data);
      setEvents(updated);
      setShowEventForm(null);
      showToast('Event created');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  };

  const handleUpdateEvent = async (data) => {
    setLoading(true);
    try {
      const updated = await updateEvent(email, password, data);
      setEvents(updated);
      setShowEventForm(null);
      showToast('Event updated');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  };

  const handleDeleteEvent = async () => {
    if (!confirmDelete) return;
    setLoading(true);
    try {
      const updated = await deleteEvent(email, password, confirmDelete.id);
      setEvents(updated);
      setConfirmDelete(null);
      showToast('Event deleted');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  };

  const handleAddMedia = async (eventId, url, type, caption) => {
    setLoading(true);
    try {
      const updated = await addMediaToEvent(email, password, eventId, url, type, caption);
      setEvents(updated);
      setShowMediaForm(null);
      showToast('Media added');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  };

  const handleUploadMedia = async (eventId, file, caption) => {
    setLoading(true);
    try {
      const updated = await uploadMediaToEvent(email, password, eventId, file, caption);
      setEvents(updated);
      setShowMediaForm(null);
      showToast('File uploaded successfully!');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  };

  const handleDeleteMedia = async () => {
    if (!confirmMediaDelete) return;
    setLoading(true);
    try {
      const updated = await deleteMediaFromEvent(email, password, confirmMediaDelete.eventId, confirmMediaDelete.index);
      setEvents(updated);
      setConfirmMediaDelete(null);
      showToast('Media removed');
    } catch (err) { showToast(err.message, 'error'); }
    finally { setLoading(false); }
  };

  if (!isApiConfigured()) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">API Not Configured</h2>
          <p className="text-slate-600 text-sm">Set <code className="bg-slate-100 px-2 py-0.5 rounded text-xs">VITE_EVENTS_API_URL</code> in your .env file to enable the admin panel.</p>
        </div>
      </div>
    );
  }

  if (!authenticated) return <LoginScreen onLogin={handleLogin} loading={loading} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      {showEventForm !== null && (
        <EventForm
          event={showEventForm === 'new' ? null : showEventForm}
          onSubmit={showEventForm === 'new' ? handleCreateEvent : handleUpdateEvent}
          onCancel={() => setShowEventForm(null)}
          loading={loading}
        />
      )}
      {showMediaForm && (
        <AddMediaForm eventId={showMediaForm} onSubmit={handleAddMedia} onUpload={handleUploadMedia} onCancel={() => setShowMediaForm(null)} loading={loading} />
      )}
      {confirmDelete && (
        <ConfirmDialog title="Delete Event" message={`Delete "${confirmDelete.title}" and all its media? This cannot be undone.`}
          onConfirm={handleDeleteEvent} onCancel={() => setConfirmDelete(null)} loading={loading} />
      )}
      {confirmMediaDelete && (
        <ConfirmDialog title="Delete Media" message="Remove this media item from the event?"
          onConfirm={handleDeleteMedia} onCancel={() => setConfirmMediaDelete(null)} loading={loading} />
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Events Manager</h1>
            <p className="text-sm text-slate-500 mt-1">{events.length} events · GCONN Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={loadEvents} disabled={loading}
              className="px-4 py-2 text-sm text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-lg transition flex items-center gap-2">
              {loading ? <FaSpinner className="w-3 h-3 animate-spin" /> : '↻'} Refresh
            </button>
            <button onClick={() => setShowEventForm('new')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition flex items-center gap-2">
              <FaPlus className="w-3 h-3" /> New Event
            </button>
            <button onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="Sign Out">
              <FaSignOutAlt className="w-4 h-4" />
            </button>
          </div>
        </div>

        {events.length === 0 && !loading ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <p className="text-slate-500">No events yet. Click "New Event" to get started.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-5 py-4 w-16">Ord</th>
                    <th className="px-5 py-4">Event Details</th>
                    <th className="px-5 py-4 w-32 text-center">Media</th>
                    <th className="px-5 py-4 w-28 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {events.map(event => (
                    <EventTableRow
                      key={event.id}
                      event={event}
                      onEdit={(ev) => setShowEventForm(ev)}
                      onDelete={(ev) => setConfirmDelete(ev)}
                      onAddMedia={(id) => setShowMediaForm(id)}
                      onDeleteMedia={(eventId, index) => setConfirmMediaDelete({ eventId, index })}
                      loading={loading}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
