/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {

      boxShadow: {
        'custom': '2px 2px 0px 0px #202227',
      },

      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
