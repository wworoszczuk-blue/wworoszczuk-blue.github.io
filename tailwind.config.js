/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        elivion: {
          bg: '#020205',
          green: '#63C979',
          blue: '#3A7BD5',
        },
      },
      fontFamily: {
        header: ['"Space Grotesk"', 'sans-serif'],
        main: ['"Montserrat"', 'sans-serif'],
        logo: ['"Mina"', 'sans-serif'],
      },
      animation: {
        'scroll-fade-in': 'scroll-fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        'scroll-fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    }
  },
  plugins: [],
};

