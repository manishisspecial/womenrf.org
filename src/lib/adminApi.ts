const ADMIN_PASSWORD = 'NothingIsPermanent';

export async function loadAdminData<T>(section: string): Promise<T | null> {
  try {
    const res = await fetch(`/api/data/${section}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    if (data && Object.keys(data).length > 0) return data as T;
    return null;
  } catch {
    return null;
  }
}

export async function saveAdminData<T>(section: string, data: T): Promise<boolean> {
  try {
    const res = await fetch(`/api/data/${section}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ADMIN_PASSWORD}`,
      },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function submitPublicForm(section: string, data: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(`/api/submit/${section}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}
