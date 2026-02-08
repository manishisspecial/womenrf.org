'use client';

import { useState, useEffect } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { loadAdminData, saveAdminData } from '@/lib/adminApi';

const SvgPlus = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const SvgVenetianMask = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
    <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
    <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
  </svg>
);

type Founder = {
  id: string;
  name: string;
  title: string;
  imageUrl?: string;
  iconBg?: 'secondary' | 'accent';
};

const defaultFounders: Founder[] = [
  { id: '1', name: 'Shabnam Salehi', title: 'Co-Founder & President ', iconBg: 'secondary' },
  { id: '2', name: 'Hanifa Girowal', title: 'Co-Founder & VP  ', iconBg: 'accent' },
];

const inputClass =
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';
const labelClass = 'block text-sm font-medium mb-2';
const btnPrimary =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-9 px-3 py-2 bg-primary hover:bg-primary/90';
const btnSecondary =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2';
const btnDestructive =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 py-2 bg-red-600 text-white hover:bg-red-700';

export default function FounderManagementPage() {
  const [founders, setFounders] = useState<Founder[]>(defaultFounders);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formIconBg, setFormIconBg] = useState<'secondary' | 'accent'>('secondary');
  const [saveStatus, setSaveStatus] = useState<'idle'|'saving'|'saved'|'error'>('idle');

  useEffect(() => {
    loadAdminData<{ founders: Founder[] }>('founders').then(data => {
      if (data?.founders) setFounders(data.founders);
    });
  }, []);

  const persist = async (updatedFounders: Founder[]) => {
    setSaveStatus('saving');
    const ok = await saveAdminData('founders', { founders: updatedFounders });
    setSaveStatus(ok ? 'saved' : 'error');
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const openAdd = () => {
    setEditingId(null);
    setFormName('');
    setFormTitle('');
    setFormImageUrl('');
    setFormIconBg('secondary');
    setDialogOpen(true);
  };

  const openEdit = (f: Founder) => {
    setEditingId(f.id);
    setFormName(f.name);
    setFormTitle(f.title);
    setFormImageUrl(f.imageUrl ?? '');
    setFormIconBg(f.iconBg ?? 'secondary');
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingId(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let updatedFounders: Founder[];
    if (editingId) {
      updatedFounders = founders.map((f) =>
        f.id === editingId
          ? { ...f, name: formName, title: formTitle, imageUrl: formImageUrl || undefined, iconBg: formIconBg }
          : f
      );
    } else {
      updatedFounders = [
        ...founders,
        {
          id: String(Date.now()),
          name: formName,
          title: formTitle,
          imageUrl: formImageUrl || undefined,
          iconBg: formIconBg,
        },
      ];
    }
    setFounders(updatedFounders);
    persist(updatedFounders);
    closeDialog();
  };

  const handleDelete = (id: string) => {
    if (typeof window !== 'undefined' && window.confirm('Delete this founder?')) {
      const updatedFounders = founders.filter((f) => f.id !== id);
      setFounders(updatedFounders);
      persist(updatedFounders);
    }
  };

  return (
    <AdminShell>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">Founder Management</h1>
            <p className="text-gray-600 font-body">Manage founder profiles for your organization</p>
          </div>
          <div className="flex items-center gap-3">
            {saveStatus === 'saving' && <span className="text-sm text-gray-500">Saving...</span>}
            {saveStatus === 'saved' && <span className="text-sm text-green-600">Saved!</span>}
            {saveStatus === 'error' && <span className="text-sm text-red-600">Save failed</span>}
            <button
              type="button"
              className={btnPrimary}
              aria-haspopup="dialog"
              aria-expanded={dialogOpen}
              onClick={openAdd}
            >
              <SvgPlus className="w-4 h-4 mr-2" />
              Add New Founder
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center overflow-hidden rounded ${
                      founder.imageUrl ? 'bg-gray-100' : founder.iconBg === 'accent' ? 'bg-accent' : 'bg-secondary'
                    }`}
                  >
                    {founder.imageUrl ? (
                      <img
                        src={founder.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <SvgVenetianMask className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold">{founder.name}</h3>
                    <p className="text-sm text-gray-600">{founder.title}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={btnSecondary}
                    onClick={() => openEdit(founder)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className={btnDestructive}
                    onClick={() => handleDelete(founder.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit dialog */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="founder-dialog-title"
        >
          <div
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
            onClick={closeDialog}
          />
          <div className="relative z-10 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg mx-4">
            <h2 id="founder-dialog-title" className="text-xl font-semibold mb-4">
              {editingId ? 'Edit Founder' : 'Add New Founder'}
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Founder name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Title / Role</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Co-Founder & President"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Image URL (optional)</label>
                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://..."
                  value={formImageUrl}
                  onChange={(e) => setFormImageUrl(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Icon background (when no image)</label>
                <select
                  className={inputClass}
                  value={formIconBg}
                  onChange={(e) => setFormIconBg(e.target.value as 'secondary' | 'accent')}
                >
                  <option value="secondary">Secondary (Purple)</option>
                  <option value="accent">Accent (Pink)</option>
                </select>
              </div>
              <div className="flex gap-2 justify-end pt-2">
                <button type="button" className={btnSecondary} onClick={closeDialog}>
                  Cancel
                </button>
                <button type="submit" className={btnPrimary}>
                  {editingId ? 'Save' : 'Add Founder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
