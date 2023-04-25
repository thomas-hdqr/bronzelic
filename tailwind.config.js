module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#59552D',
        'second': '#E2DCBE',
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}