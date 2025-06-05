/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"Garamond"', '"monotype-garamond"', 'serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}