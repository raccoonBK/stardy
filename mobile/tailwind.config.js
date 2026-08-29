/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        night: {
          50:  '#f7f5ff',
          200: '#c5bdf8',
          500: '#7c6df0',
          700: '#4a3fb7',
          900: '#14102b',
          950: '#0a0717',
        },
        cream: '#fff7e6',
        amber: '#f4b942',
        rose:  '#f97583',
        mint:  '#6ee7b7',
      },
      borderRadius: {
        sk: '18px',
        'sk-lg': '26px',
      },
      boxShadow: {
        sk: '0 6px 0 rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};
