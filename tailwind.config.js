/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Sour Gummy", "sans-serif"], // Menambahkan font Sour Gummy
      },
      colors: {
        white: "#FCF8F3",
        instagram: {
          light: "#F58529", // Warna oranye
          pink: "#D6249F", // Warna pink
          purple: "#9B4DE2", // Warna ungus
        },
      },
      backgroundImage: {
        "radial-instagram":
          "radial-gradient(circle, #F58529, #D6249F, #9B4DE2)", // Gradien radial
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
