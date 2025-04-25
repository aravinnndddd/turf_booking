/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'deep': '0 10px 20px rgba(0, 0, 0, 0.5)',
      },
    }
  },
  plugins: [],
}