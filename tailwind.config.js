/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#ffffff',
        mute: '#8c8c8c',
        bone: '#f5f4f0',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        editorial: '-0.025em',
        wide2: '0.04em',
        wide3: '0.08em',
        wide4: '0.18em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: { site: '1280px' },
    },
  },
  plugins: [],
};
