/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(179, 80%, 58%);",
        darkBlue: "hsl(206, 84%, 22%);",
        gray: "hsl(225, 14%, 53%);",
        white: "hsl(0, 0%, 100%);",
        veryDarkBlue: "hsl(230, 60%, 8%);",
        red: "hsl(343, 100%, 58%);",
        green: "hsl(120, 73%, 75%)"
      }
    },
  },
  plugins: [],
}

