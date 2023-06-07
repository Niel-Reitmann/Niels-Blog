/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '960': '960px',
        '45': '45%',
      },
      spacing: {
        '5': '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
