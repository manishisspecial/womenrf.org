'use client';

import { useEffect, useState, useCallback } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { loadAdminData, saveAdminData } from '@/lib/adminApi';

interface Vacancy {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  requirements: string;
  status: 'open' | 'closed' | 'draft';
  deadline: string;
  postedAt: string;
}

const TYPE_COLORS: Record<Vacancy['type'], string> = {
  'full-time': 'bg-blue-100 text-blue-800',
  'part-time': 'bg-indigo-100 text-indigo-800',
  contract: 'bg-orange-100 text-orange-800',
  internship: 'bg-teal-100 text-teal-800',
};

const STATUS_COLORS: Record<Vacancy['status'], string> = {
  open: 'bg-emerald-100 text-emerald-800',
  closed: 'bg-red-100 text-red-800',
  draft: 'bg-gray-100 text-gray-800',
};

const STATUS_FILTERS = ['all', 'open', 'closed', 'draft'] as const;

const emptyVacancy: Omit<Vacancy, 'id'> = {
  title: '', description: '', category: '', location: '', type: 'full-time',
  requirements: '', status: 'draft', deadline: '', postedAt: new Date().toISOString().split('T')[0],
};

export default function VacancyManagementPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showDialog, setShowDialog] = useState(false);
  const [editing, setEditing] = useState<Vacancy | null>(null);
  const [form, setForm] = useState(emptyVacancy);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await loadAdminData<Vacancy[]>('vacancies');
    if (data) setVacancies(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async (updated: Vacancy[]) => {
    setSaving(true);
    const ok = await saveAdminData('vacancies', updated);
    if (ok) setVacancies(updated);
    else alert('Failed to save. Please try again.');
    setSaving(false);
  };

  const openAdd = () => { setEditing(null); setForm(emptyVacancy); setShowDialog(true); };

  const openEdit = (v: Vacancy) => {
    setEditing(v);
    setForm({ title: v.title, description: v.description, category: v.category, location: v.location, type: v.type, requirements: v.requirements, status: v.status, deadline: v.deadline, postedAt: v.postedAt });
    setShowDialog(true);
  };

  const handleSubmit = async () => {
    if (!form.title.trim()) { alert('Title is required'); return; }
    if (editing) {
      await save(vacancies.map(v => v.id === editing.id ? { ...v, ...form } : v));
    } else {
      await save([...vacancies, { ...form, id: crypto.randomUUID() }]);
    }
    setShowDialog(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await save(vacancies.filter(v => v.id !== deleteId));
    setDeleteId(null);
  };

  const filtered = filterStatus === 'all' ? vacancies : vacancies.filter(v => v.status === filterStatus);

  return (
    <AdminShell>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">Vacancy Management</h1>
            <p className="text-gray-600 font-body">Manage job openings and positions</p>
          </div>
          <button onClick={openAdd} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#725D92] hover:bg-[#635081] text-white">+ Add Vacancy</button>
        </div>

        {/* Status filters */}
        <div className="flex gap-2 flex-wrap">
          {STATUS_FILTERS.map(s => (
            <button key={s} onClick={() => setFilterStatus(s)}
              className={`rounded-none font-semibold text-sm px-4 py-2 capitalize ${filterStatus === s ? 'bg-[#725D92] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {s === 'all' ? `All (${vacancies.length})` : `${s} (${vacancies.filter(v => v.status === s).length})`}
            </button>
          ))}
        </div>

        {loading ? <p className="text-gray-500">Loading...</p> : filtered.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center py-12">
            <p className="text-gray-500 text-lg font-semibold">No vacancies found</p>
            <p className="text-gray-400 mt-1">Create your first vacancy to get started</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Title</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Deadline</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filtered.map(v => (
                  <tr key={v.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{v.title}</td>
                    <td className="px-4 py-3 text-gray-600">{v.category}</td>
                    <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${TYPE_COLORS[v.type]}`}>{v.type}</span></td>
                    <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold capitalize ${STATUS_COLORS[v.status]}`}>{v.status}</span></td>
                    <td className="px-4 py-3 text-gray-600">{v.deadline || '—'}</td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <button onClick={() => openEdit(v)} className="rounded-none font-semibold text-sm px-3 py-1 bg-[#725D92] hover:bg-[#635081] text-white">Edit</button>
                      <button onClick={() => setDeleteId(v.id)} className="rounded-none font-semibold text-sm px-3 py-1 bg-[#E57173] hover:bg-[#d65a5c] text-white">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setShowDialog(false)}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">{editing ? 'Edit Vacancy' : 'Add New Vacancy'}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                    className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value as Vacancy['type'] }))}
                    className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none">
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Vacancy['status'] }))}
                    className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none">
                    <option value="draft">Draft</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                  <input type="date" value={form.deadline} onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))}
                    className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={4} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                <textarea rows={4} value={form.requirements} onChange={e => setForm(f => ({ ...f, requirements: e.target.value }))}
                  className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowDialog(false)} className="rounded-none font-semibold text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Cancel</button>
              <button onClick={handleSubmit} disabled={saving} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#725D92] hover:bg-[#635081] text-white disabled:opacity-50">
                {saving ? 'Saving...' : editing ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setDeleteId(null)}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-2">Confirm Delete</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to delete this vacancy? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteId(null)} className="rounded-none font-semibold text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Cancel</button>
              <button onClick={handleDelete} disabled={saving} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#E57173] hover:bg-[#d65a5c] text-white disabled:opacity-50">
                {saving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
