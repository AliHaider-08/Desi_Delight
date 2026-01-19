/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#11d462",
        "primary-dark": "#0ea64d",
        "background-light": "#f6f8f7",
        "background-dark": "#102218",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2e22",
        "text-main": "#0d1b13",
        "text-light": "#f8fcfa",
        "text-secondary": "#4c9a6c",
        "text-muted": "#4c9a6c",
        "text-subtle": "#4c9a6c",
        "border-color": "#cfe7d9",
        "border-light": "#cfe7d9",
        "border-dark": "#2a4034",
        "hover-bg": "#e7f3ec",
        "card-light": "#ffffff",
        "card-dark": "#162e21",
        "accent-maroon": "#800020",
        "accent-gold": "#C5A059",
      },
      fontFamily: {
        "display": ["Work Sans", "sans-serif"],
        "body": ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
