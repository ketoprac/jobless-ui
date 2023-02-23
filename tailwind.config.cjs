/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 15px 30px rgba(0, 26, 255, 0.2)",
        card: "0px 30px 60px rgba(0, 26, 255, 0.1)",
      },
      colors: {
        newBlue: "#001AFF",
        newYellow: "#F8FB76",
        newGreen: "#4EFF75",
        newCyan: "#00FFD1"
      },
    },
  },
  plugins: [],
};
