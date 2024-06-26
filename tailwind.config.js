/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        accent: "#db4444",
        text: "#000",
        secondaryAccent: "#00FF66", // added missing '#' symbol
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        padding_lg_py: "2rem",
        padding_lg_px: "5rem",

        padding_md_px: "2rem",
        padding_md_py: "3rem", // corrected key

        padding_sm_px: "1rem",
        padding_sm_py: "2rem",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        'radial-g': 'radial-gradient(circle, #D9D9D9)',
        // Add more custom radial gradients here
      },
      blur: {
        '200': '200px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          /* Firefox */
          "scrollbar-width": "auto",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      });
    },
  ],
};
