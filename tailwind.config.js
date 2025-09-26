/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#12131a',
        surface: '#1e1f28', 
        card: '#232536',
        text: '#e0e0e0',
        muted: '#888',
        accent: '#8b5cf6',
        accent2: '#ec4899',
        border: '#2a2e3b'
      }
    }
  },
  plugins: []
}
