import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wrf: {
          purple: '#6B5B95',
          'purple-dark': '#5a4a84',
          coral: '#E07A7A',
          'coral-light': '#e99a9a',
          black: '#1a1a1a',
          'gray-bg': '#d9d9d9',
          'gray-text': '#6b6b6b',
          'top-strip': '#e8e0d0',
          'footer-mauve': '#b88a9e',
          'footer-dark': '#2d2d2d',
          whatsapp: '#25D366',
          'logo-beige': '#E8D4C4',
        },
      },
      fontSize: {
        'header-nav': ['0.8125rem', { lineHeight: '1.25', letterSpacing: '0.03em' }],
        'header-tagline': ['0.6875rem', { lineHeight: '1.3' }],
        'hero-headline': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
