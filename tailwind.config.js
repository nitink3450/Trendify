/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': 'linear-gradient(90.79deg, rgba(255, 255, 255, 0.33) 0.48%, #FFFFFF 24.27%, #FFFFFF 68.52%, rgba(255, 255, 255, 0.29) 106.69%)',
      },
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
}