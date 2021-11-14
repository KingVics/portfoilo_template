module.exports = {
  // important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        light: '#fff',
        DEFAULT: '#333',
        dark: '#59b256',
      },
      gray: {
        light: '#F7F6F9'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
