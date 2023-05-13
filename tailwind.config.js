/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // colors: {
    //   gray: "#E4E4E4",
    // },
    extend: {
      fontFamily: {
        "SF Pro Display": ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
}

