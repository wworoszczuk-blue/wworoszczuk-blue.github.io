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
    }
  },
  plugins: [],
};

