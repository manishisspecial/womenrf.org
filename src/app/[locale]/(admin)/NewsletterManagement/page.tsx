'use client';

import { useEffect, useState, useCallback } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { loadAdminData, saveAdminData } from '@/lib/adminApi';

/* ---------- Interfaces ---------- */
interface Subscriber {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribedAt: string;
}

interface Campaign {
  id: string;
  subject: string;
  content: string;
  status: 'draft' | 'sent';
  sentAt: string;
  createdAt: string;
}

type TabId = 'subscribers' | 'campaigns';

const emptyCampaign: Omit<Campaign, 'id'> = {
  subject: '', content: '', status: 'draft', sentAt: '', createdAt: new Date().toISOString().split('T')[0],
};

export default function NewsletterManagementPage() {
  const [activeTab, setActiveTab] = useState<TabId>('subscribers');

  /* Subscribers */
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [subLoading, setSubLoading] = useState(true);
  const [subSaving, setSubSaving] = useState(false);
  const [deleteSubId, setDeleteSubId] = useState<string | null>(null);

  /* Campaigns */
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [campLoading, setCampLoading] = useState(true);
  const [campSaving, setCampSaving] = useState(false);
  const [campDialog, setCampDialog] = useState(false);
  const [editingCamp, setEditingCamp] = useState<Campaign | null>(null);
  const [campForm, setCampForm] = useState(emptyCampaign);
  const [deleteCampId, setDeleteCampId] = useState<string | null>(null);

  /* ---------- Loaders ---------- */
  const loadSubs = useCallback(async () => {
    setSubLoading(true);
    const data = await loadAdminData<Subscriber[]>('newsletter-subscribers');
    if (data) setSubscribers(data);
    setSubLoading(false);
  }, []);

  const loadCamps = useCallback(async () => {
    setCampLoading(true);
    const data = await loadAdminData<Campaign[]>('newsletter');
    if (data) setCampaigns(data);
    setCampLoading(false);
  }, []);

  useEffect(() => { loadSubs(); loadCamps(); }, [loadSubs, loadCamps]);

  /* ---------- Subscriber actions ---------- */
  const saveSubs = async (updated: Subscriber[]) => {
    setSubSaving(true);
    const ok = await saveAdminData('newsletter-subscribers', updated);
    if (ok) setSubscribers(updated);
    else alert('Failed to save.');
    setSubSaving(false);
  };

  const toggleSubStatus = async (id: string) => {
    const updated = subscribers.map(s =>
      s.id === id ? { ...s, status: (s.status === 'active' ? 'unsubscribed' : 'active') as Subscriber['status'] } : s
    );
    await saveSubs(updated);
  };

  const handleDeleteSub = async () => {
    if (!deleteSubId) return;
    await saveSubs(subscribers.filter(s => s.id !== deleteSubId));
    setDeleteSubId(null);
  };

  const exportCsv = () => {
    const header = 'Email,Status,Subscribed At\n';
    const rows = subscribers.map(s => `${s.email},${s.status},${s.subscribedAt}`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  /* ---------- Campaign actions ---------- */
  const saveCamps = async (updated: Campaign[]) => {
    setCampSaving(true);
    const ok = await saveAdminData('newsletter', updated);
    if (ok) setCampaigns(updated);
    else alert('Failed to save.');
    setCampSaving(false);
  };

  const openAddCamp = () => { setEditingCamp(null); setCampForm(emptyCampaign); setCampDialog(true); };
  const openEditCamp = (c: Campaign) => {
    setEditingCamp(c);
    setCampForm({ subject: c.subject, content: c.content, status: c.status, sentAt: c.sentAt, createdAt: c.createdAt });
    setCampDialog(true);
  };

  const handleCampSubmit = async () => {
    if (!campForm.subject.trim()) { alert('Subject is required'); return; }
    if (editingCamp) {
      await saveCamps(campaigns.map(c => c.id === editingCamp.id ? { ...c, ...campForm } : c));
    } else {
      await saveCamps([...campaigns, { ...campForm, id: crypto.randomUUID() }]);
    }
    setCampDialog(false);
  };

  const handleDeleteCamp = async () => {
    if (!deleteCampId) return;
    await saveCamps(campaigns.filter(c => c.id !== deleteCampId));
    setDeleteCampId(null);
  };

  /* ---------- Stats ---------- */
  const totalSubs = subscribers.length;
  const activeSubs = subscribers.filter(s => s.status === 'active').length;
  const unsubbed = subscribers.filter(s => s.status === 'unsubscribed').length;

  const TABS: { id: TabId; label: string }[] = [
    { id: 'subscribers', label: `Subscribers (${totalSubs})` },
    { id: 'campaigns', label: `Campaigns (${campaigns.length})` },
  ];

  return (
    <AdminShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary">Newsletter Management</h1>
          <p className="text-gray-600 font-body">Manage subscribers and newsletter campaigns</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Total Subscribers', value: totalSubs, color: 'text-blue-600' },
            { label: 'Active', value: activeSubs, color: 'text-emerald-600' },
            { label: 'Unsubscribed', value: unsubbed, color: 'text-red-600' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${activeTab === tab.id ? 'border-[#725D92] text-[#725D92]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Subscribers */}
        {activeTab === 'subscribers' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button onClick={exportCsv} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#725D92] hover:bg-[#635081] text-white">Export CSV</button>
            </div>
            {subLoading ? <p className="text-gray-500">Loading...</p> : subscribers.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center py-12">
                <p className="text-gray-500 text-lg font-semibold">No subscribers yet</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Email</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Subscribed</th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {subscribers.map(sub => (
                      <tr key={sub.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{sub.email}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${sub.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'}`}>{sub.status}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{sub.subscribedAt}</td>
                        <td className="px-4 py-3 text-right space-x-2">
                          <button onClick={() => toggleSubStatus(sub.id)} disabled={subSaving}
                            className="rounded-none font-semibold text-sm px-3 py-1 bg-[#725D92] hover:bg-[#635081] text-white disabled:opacity-50">
                            {sub.status === 'active' ? 'Unsubscribe' : 'Reactivate'}
                          </button>
                          <button onClick={() => setDeleteSubId(sub.id)} className="rounded-none font-semibold text-sm px-3 py-1 bg-[#E57173] hover:bg-[#d65a5c] text-white">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Campaigns */}
        {activeTab === 'campaigns' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button onClick={openAddCamp} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#725D92] hover:bg-[#635081] text-white">+ New Campaign</button>
            </div>
            {campLoading ? <p className="text-gray-500">Loading...</p> : campaigns.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center py-12">
                <p className="text-gray-500 text-lg font-semibold">No campaigns yet</p>
                <p className="text-gray-400 mt-1">Create your first newsletter campaign to get started</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Subject</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Date</th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {campaigns.map(c => (
                      <tr key={c.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{c.subject}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${c.status === 'sent' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'}`}>{c.status}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{c.status === 'sent' ? c.sentAt : c.createdAt}</td>
                        <td className="px-4 py-3 text-right space-x-2">
                          <button onClick={() => openEditCamp(c)} className="rounded-none font-semibold text-sm px-3 py-1 bg-[#725D92] hover:bg-[#635081] text-white">Edit</button>
                          <button onClick={() => setDeleteCampId(c.id)} className="rounded-none font-semibold text-sm px-3 py-1 bg-[#E57173] hover:bg-[#d65a5c] text-white">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Subscriber Confirmation */}
      {deleteSubId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setDeleteSubId(null)}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-2">Confirm Delete</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to delete this subscriber?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteSubId(null)} className="rounded-none font-semibold text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Cancel</button>
              <button onClick={handleDeleteSub} disabled={subSaving} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#E57173] hover:bg-[#d65a5c] text-white disabled:opacity-50">
                {subSaving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Campaign Add/Edit Dialog */}
      {campDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setCampDialog(false)}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">{editingCamp ? 'Edit Campaign' : 'New Campaign'}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input value={campForm.subject} onChange={e => setCampForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea rows={8} value={campForm.content} onChange={e => setCampForm(f => ({ ...f, content: e.target.value }))}
                  className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={campForm.status} onChange={e => setCampForm(f => ({ ...f, status: e.target.value as Campaign['status'], sentAt: e.target.value === 'sent' ? new Date().toISOString().split('T')[0] : f.sentAt }))}
                  className="w-full rounded-none border-2 border-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#725D92] outline-none">
                  <option value="draft">Draft</option>
                  <option value="sent">Sent</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setCampDialog(false)} className="rounded-none font-semibold text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Cancel</button>
              <button onClick={handleCampSubmit} disabled={campSaving} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#725D92] hover:bg-[#635081] text-white disabled:opacity-50">
                {campSaving ? 'Saving...' : editingCamp ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Campaign Confirmation */}
      {deleteCampId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setDeleteCampId(null)}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-2">Confirm Delete</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to delete this campaign?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteCampId(null)} className="rounded-none font-semibold text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">Cancel</button>
              <button onClick={handleDeleteCamp} disabled={campSaving} className="rounded-none font-semibold text-sm px-4 py-2 bg-[#E57173] hover:bg-[#d65a5c] text-white disabled:opacity-50">
                {campSaving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
