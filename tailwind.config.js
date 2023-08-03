/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        royal: ['var(--font-royal)']
      },
      colors: {
        'primary': '#66AFF3',
        'secondary': '#00BAFF',
        'backColor': '#090D24',
        'backColor2': '#171A2A',
        'btnColor': '#0F508D'
      }
    },
  },
  plugins: [],
}
