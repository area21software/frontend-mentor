/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paleBlue: "#666CA3",
        darkBlue: "#13183F",
        grayBlue: "#83869A",
        ePink: "#F02AA6",
        eOrange: "#FF6F48",
        ePurple: "#4851FF",
        offWhite: "#FAF9F6",
      },
      fontSize: {
        hs: ["1.5rem", { lineHeight: "28px" }],
        hm: ["2rem", { lineHeight: "40px" }],
        hl: ["2.5rem", { lineHeight: "51px" }],
        hxl: ["3.5rem", { lineHeight: "70px" }],
        bs: ["1rem", { lineHeight: "28px" }],
        bm: ["1.125rem", { lineHeight: "28px" }],
      },
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans, sans-serif",
      },
    },
  },
  plugins: [],
}
