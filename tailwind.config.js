/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/**.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : 'manrope, sans-serif'
      },
      colors: {
        'cta': 'hsl(21, 65%, 57%)',
        'bg1': 'hsl(0, 0%, 6%)',
        'bg2': 'hsl(0, 0%, 95%)',
        'text1': 'hsl(0, 0%, 56%)'
      },
      backgroundImage: {
        'desktopHero': "url('/home/desktop/image-hero.jpg')",
        'tabletHero': "url('/home/tablet/image-header.jpg')",
        'mobileHero': "url('/home/mobile/image-header.jpg')",
        'patternCircles' : "url('/home/desktop/pattern-circles.svg')" 
      }
    },
  },
  plugins: [],
}