/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  darkMode: 'class',
  theme: {
      extend: { 
          colors: {
            'shaw': {
              0: '#e2f3f1',
              100: '#c6e8e4',
              200: '#a9ddd6',
              300: '#96c7c1',
              400: '#83b1ab',
              500: '#5d857f',
              600: '#375954',
              700: '#24433e',
              800: '#1b3833',
              900: '#112c28',
              999: '#061714'
            },
          }
      }
  },
  variants: {
      extend: {},
  },
    // daisyUI config (optional)
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/colors/themes")["[data-theme=light]"],
            primary: "#14b8a6",
          },
        },
      ],
    },
}
