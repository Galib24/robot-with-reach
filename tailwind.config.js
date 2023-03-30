/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9fe6f4",

          "secondary": "#d5fc79",

          "accent": "#0f5f91",

          "neutral": "#181E2A",

          "base-100": "#2F2C3A",

          "info": "#4091DD",

          "success": "#36E7AF",

          "warning": "#E1BA09",

          "error": "#F34F6D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

