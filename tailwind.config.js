/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e0e',
        paper: '#ffffff',
        mute: '#8c8c8c',
        soft: '#e8e6e1',
        bone: '#f4f2ee',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tight2: '-0.012em',
        wide2: '0.04em',
        wide3: '0.08em',
        wide4: '0.18em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};
