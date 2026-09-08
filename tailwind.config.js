/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'deep-green': 'var(--color-brand-deep-green)',
          'deep-green-glow': 'var(--color-brand-deep-green-glow)',
          'green': 'var(--color-brand-green)',
          'green-light': 'var(--color-brand-green-light)',
          'slate': 'var(--color-brand-slate)',
          'slate-light': 'var(--color-brand-slate-light)',
          'slate-dark': 'var(--color-brand-slate-dark)',
          'slate-subtle': 'var(--color-brand-slate-subtle)',
        },
        neutral: {
          950: 'var(--color-neutral-950)',
          900: 'var(--color-neutral-900)',
          800: 'var(--color-neutral-800)',
          700: 'var(--color-neutral-700)',
          600: 'var(--color-neutral-600)',
          500: 'var(--color-neutral-500)',
          400: 'var(--color-neutral-400)',
          300: 'var(--color-neutral-300)',
          200: 'var(--color-neutral-200)',
          100: 'var(--color-neutral-100)',
          50: 'var(--color-neutral-50)',
          warm: 'var(--color-neutral-warm)',
          'warm-card': 'var(--color-neutral-warm-card)',
        },
        semantic: {
          success: 'var(--color-success)',
          'success-bg': 'var(--color-success-bg)',
          warning: 'var(--color-warning)',
          'warning-bg': 'var(--color-warning-bg)',
          danger: 'var(--color-danger)',
          'danger-bg': 'var(--color-danger-bg)',
          info: 'var(--color-info)',
          'info-bg': 'var(--color-info-bg)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      spacing: {
        '1': 'var(--space-1)',       // 4px
        '2': 'var(--space-2)',       // 8px
        '3': 'var(--space-3)',       // 12px
        '4': 'var(--space-4)',       // 16px
        '5': 'var(--space-5)',       // 20px
        '6': 'var(--space-6)',       // 24px
        '8': 'var(--space-8)',       // 32px
        '10': 'var(--space-10)',     // 40px
        '12': 'var(--space-12)',     // 48px
        '16': 'var(--space-16)',     // 64px
        '20': 'var(--space-20)',     // 80px
        '24': 'var(--space-24)',     // 96px
        '30': 'var(--space-30)',     // 120px
      },
      borderRadius: {
        'control': 'var(--radius-control)',   // 8px
        'card': 'var(--radius-card)',         // 14px
        'card-lg': 'var(--radius-card-lg)',   // 20px
        'dashboard': 'var(--radius-dashboard)', // 28px
        'pill': 'var(--radius-pill)',         // 9999px
      },
      boxShadow: {
        'card-subtle': 'var(--shadow-card-subtle)',
        'card-hover': 'var(--shadow-card-hover)',
        'surface-elevated': 'var(--shadow-surface-elevated)',
        'product-mockup': 'var(--shadow-product-mockup)',
        'dark-glow': 'var(--shadow-dark-glow)',
        'hero-inset': 'var(--shadow-hero-inset)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% -10%, var(--color-brand-deep-green-glow) 0%, var(--color-brand-deep-green) 75%)',
        'metallic-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 50%, rgba(0,0,0,0.12) 100%)',
        'soft-warm-card': 'linear-gradient(180deg, #FFFFFF 0%, var(--color-neutral-warm) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
