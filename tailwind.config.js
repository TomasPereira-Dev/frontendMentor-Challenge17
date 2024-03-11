/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cta': 'hsl(21, 65%, 57%)',
        'bg1': 'hsl(0, 0%, 6%)',
        'bg2': 'hsl(0, 0%, 95%)'
      },
      backgroundImage: {
        'desktopHero': `url('/home/desktop/image-hero.jpg')`
      }
    },
  },
  plugins: [],
}