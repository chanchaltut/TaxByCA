/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '2xs': '375px',
        '3xs': '320px',
      },
      colors: {
        // TaxByCA brand — derived from the logo blue #06529A
        brand: {
          50:  '#EFF5FD',
          100: '#DCE9FA',
          200: '#B7D3F5',
          300: '#86B4EC',
          400: '#4A8EDF',
          500: '#1B6FCF',
          600: '#06529A',   // LOGO BLUE
          700: '#05437F',
          800: '#063666',
          900: '#07284B',
          950: '#041A33',
        },
        ink: {
          DEFAULT: '#0B1B33',  // headings / body text
          soft:    '#46546B',  // secondary text
          mute:    '#7A879B',  // tertiary text
          950:     '#030D1C',  // darkest surface
          900:     '#061428',  // dark section bg
          800:     '#0B1F3B',
        },
        surface: '#F5F8FC',
        line:    '#E3EAF4',
        sky:     { glow: '#5BB4FF' },
        whatsapp: { DEFAULT: '#1FAF5A', dark: '#168A46' },
      },
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee':     'marquee 40s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'spin-slow':   'spin 40s linear infinite',
        'spin-slower': 'spin 70s linear infinite reverse',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft':    '0 1px 2px rgba(11,27,51,0.04), 0 8px 24px -8px rgba(11,27,51,0.08)',
        'lift':    '0 2px 4px rgba(11,27,51,0.04), 0 24px 48px -16px rgba(6,82,154,0.22)',
        'float':   '0 30px 80px -20px rgba(4,26,51,0.35)',
        'glow':    '0 10px 40px -10px rgba(27,111,207,0.65)',
        'inset-hi':'inset 0 1px 0 rgba(255,255,255,0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
