'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ADMIN_PASSWORD = 'NothingIsPermanent';

const adminLoginColors = {
  primary: '#120F10',
  secondary: '#725D92',
  accent: '#E57173',
};

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem('wrf_admin_auth', 'true');
        localStorage.setItem('wrf_admin_login_time', Date.now().toString());
        router.push('/AdminDashboard');
      } else {
        setError('Invalid password. Please try again.');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap');`,
      }} />
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <div className="rounded-lg bg-white text-gray-900 w-full max-w-md shadow-2xl border-0">
          {/* Header */}
          <div className="flex flex-col space-y-1.5 p-6 text-center pb-2">
            <div
              className="mx-auto rounded-full p-6 mb-4 w-20 h-20 flex items-center justify-center"
              style={{ backgroundColor: adminLoginColors.secondary }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-white"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            </div>
            <h3
              className="tracking-tight text-3xl font-bold mb-2"
              style={{ fontFamily: 'Urbanist, sans-serif', color: adminLoginColors.primary }}
            >
              Admin Access
            </h3>
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Enter your password to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <div className="p-6 pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="flex w-full bg-white border-2 border-gray-200 px-3 py-2 text-base placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#725D92] focus-visible:ring-offset-2 focus-visible:border-[#725D92] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-10 h-12 rounded-none font-medium"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-2 w-full h-12 text-white font-semibold rounded-none bg-[#725D92] hover:bg-[#635081]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {isLoading ? 'Accessing...' : 'Access Dashboard'}
              </button>
            </form>

            {/* Session note */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Session expires after 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
