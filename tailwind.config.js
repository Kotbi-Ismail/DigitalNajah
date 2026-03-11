/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 20px 80px rgba(56, 189, 248, 0.18)',
      },
    },
  },
  plugins: [],
};
