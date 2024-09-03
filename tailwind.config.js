/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Includes the main HTML file
    "./src/**/*.{js,jsx}",   // Includes all JS and JSX files in the src directory
  ],
  theme: {
    extend: {
      screens: {
        'xs': '325px',       // Custom breakpoint for small screens
      },
    },
  },
  plugins: [],
}
