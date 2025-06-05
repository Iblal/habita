module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                'nunito-bold': ['nunito-bold', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
