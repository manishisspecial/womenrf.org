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

interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorImageUrl: string;
}

const inputClass =
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';
const textareaClass =
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
const labelClass = 'block text-sm font-medium mb-2';
const btnPrimary =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-9 px-3 py-2 bg-primary hover:bg-primary/90';
const btnSecondary =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2';
const btnDestructive =
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 py-2 bg-red-600 text-white hover:bg-red-700';

export default function TestimonialManagementPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [quote, setQuote] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [authorImageUrl, setAuthorImageUrl] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Load from API
  useEffect(() => {
    loadAdminData<{ testimonials: Testimonial[] }>('testimonials').then((data) => {
      if (data?.testimonials) setTestimonials(data.testimonials);
    });
  }, []);

  // Persist helper
  const persist = async (updated: Testimonial[]) => {
    setSaveStatus('saving');
    const ok = await saveAdminData('testimonials', { testimonials: updated });
    setSaveStatus(ok ? 'saved' : 'error');
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const openAdd = () => {
    setEditingId(null);
    setQuote('');
    setAuthorName('');
    setAuthorRole('');
    setAuthorImageUrl('');
    setDialogOpen(true);
  };

  const openEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setQuote(t.quote);
    setAuthorName(t.authorName);
    setAuthorRole(t.authorRole);
    setAuthorImageUrl(t.authorImageUrl);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingId(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let updatedTestimonials: Testimonial[];
    if (editingId) {
      updatedTestimonials = testimonials.map((t) =>
        t.id === editingId
          ? { ...t, quote, authorName, authorRole, authorImageUrl }
          : t
      );
    } else {
      updatedTestimonials = [
        ...testimonials,
        {
          id: String(Date.now()),
          quote,
          authorName,
          authorRole,
          authorImageUrl,
        },
      ];
    }
    setTestimonials(updatedTestimonials);
    persist(updatedTestimonials);
    closeDialog();
  };

  const handleDelete = (id: string) => {
    if (typeof window !== 'undefined' && window.confirm('Delete this testimonial?')) {
      const updatedTestimonials = testimonials.filter((t) => t.id !== id);
      setTestimonials(updatedTestimonials);
      persist(updatedTestimonials);
    }
  };

  return (
    <AdminShell>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">Testimonial Management</h1>
            <p className="text-gray-600 font-body">Manage the testimonials displayed on the homepage slider.</p>
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
              Add New Testimonial
            </button>
          </div>
        </div>

        {/* Testimonials list */}
        <div className="space-y-4">
          {testimonials.length === 0 ? (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 text-center">
              <p className="text-muted-foreground">No testimonials yet. Click &quot;Add New Testimonial&quot; to create one.</p>
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center overflow-hidden rounded ${
                        testimonial.authorImageUrl ? 'bg-gray-100' : 'bg-secondary'
                      }`}
                    >
                      {testimonial.authorImageUrl ? (
                        <img
                          src={testimonial.authorImageUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <SvgVenetianMask className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold">{testimonial.authorName}</h3>
                      <p className="text-sm text-gray-600">{testimonial.authorRole}</p>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className={btnSecondary}
                      onClick={() => openEdit(testimonial)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className={btnDestructive}
                      onClick={() => handleDelete(testimonial.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add/Edit dialog */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-dialog-title"
        >
          <div
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
            onClick={closeDialog}
          />
          <div className="relative z-10 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg mx-4">
            <h2 id="testimonial-dialog-title" className="text-xl font-semibold mb-4">
              {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className={labelClass}>Quote</label>
                <textarea
                  className={textareaClass}
                  placeholder="What did this person say?"
                  rows={4}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Author Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Jane Doe"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Author Role</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Volunteer, Partner, Beneficiary"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Author Image URL (optional)</label>
                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://..."
                  value={authorImageUrl}
                  onChange={(e) => setAuthorImageUrl(e.target.value)}
                />
              </div>
              <div className="flex gap-2 justify-end pt-2">
                <button type="button" className={btnSecondary} onClick={closeDialog}>
                  Cancel
                </button>
                <button type="submit" className={btnPrimary}>
                  {editingId ? 'Save' : 'Add Testimonial'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
