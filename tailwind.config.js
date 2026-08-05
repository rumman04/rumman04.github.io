const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.24), transparent 35%), radial-gradient(circle at right, rgba(139,92,246,0.18), transparent 25%), linear-gradient(180deg, #020617 0%, #04060c 100%)'
      }
    }
  },
  plugins: []
};
