/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",   
      "./pages/**/*.{js,ts,jsx,tsx}", 
      "./components/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(90deg, rgba(26, 109, 242, 1) 0%, rgba(8, 16, 28, 1) 50%, rgba(50, 98, 176, 1) 100%)',
        },
      },
    },
    plugins: [],
  }
  