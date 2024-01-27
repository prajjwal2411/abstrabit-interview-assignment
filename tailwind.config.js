/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header-border': '#EAEAEC',
        'content-background': '#F7F8FA',
        'global-blue': '#4F5FD4',
      }
    },
  },
  plugins: [],
}

