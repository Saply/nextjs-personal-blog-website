/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ec3d60",
        gray: "#747474",
        footer: "#272727"
      },
      // use class names for fonts
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
      screens: {
        sxl: "1180px", // @media (min-width: 1180px)
        xs: "480px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography')
  ],
}



