/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pfDarkPink: "hsl(282, 83%, 52%)",
        pfDarkBlue: "hsl(230, 76%, 59%)",
        pfOffWhite: "hsl(231, 100%, 97%)",
        pfLightWhite: "hsl(230, 60%, 98%)",
        pfOrange: "hsl(14, 83%, 74%)",
        pfLightBlue: "hsl(204, 94%, 68%)",
        pfGrey: "hsl(224, 20%, 49%)",
        pfDarkBlueGrey1: "hsl()230, 31%, 31%",
        pfDarkBlueGrey2: "hsl(231, 33%, 34%)",
      },
      fontFamily: {
        jost: "Jost, sans-serif",
      },
      fontSize: {
        hl: ["1.5rem", { lineHeight: "35px" }],
        hm: ["1.25rem", { lineHeight: "29px" }],
        hs: ["1.125rem", { lineHeight: "26px" }],
        hxs: ["0.875rem", { lineHeight: "20px" }],
        b1: ["1rem", { lineHeight: "23px" }],
        b2: ["0.9375rem", { lineHeight: "22px" }],
        b3: ["0.8125rem", { lineHeight: "19px" }],
      },
    },
  },
  plugins: [],
}
