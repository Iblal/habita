module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'nunito-extra-bold': ['nunito-extra-bold', 'sans-serif'],
        'nunito-bold': ['nunito-bold', 'sans-serif'],
        'nunito-semi-bold': ['nunito-semi-bold', 'sans-serif'],
        'nunito-medium': ['nunito-medium', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5C00',
      },
    },
  },
  plugins: [],
};
