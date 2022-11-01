/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            "dj-violet": "hsl(235, 69%, 61%)",
            "dj-light-violet": "hsl(235, 82%, 77%)",
            "dj-very-dark-blue": "	hsl(219, 29%, 14%)",
            "dj-midnight": "hsl(220, 29%, 10%)",
            "dj-white": "hsl(0, 0%, 100%)",
            "dj-light-gray": "hsl(210, 22%, 96%)",
            "dj-gray": "hsl(212, 23%, 69%)",
            "dj-dark-gray": "hsl(214, 17%, 51%)",
        },
        fontSize: {
            sm: ["0.825rem", { lineHeight: "1.125rem" }],
            md: ["1rem", { lineHeight: "1.625rem" }],
            lg: ["1.25rem", { lineHeight: "1.5rem" }],
            xl: ["1.5rem", { lineHeight: "1.8rem" }],
            "2xl": ["1.75rem", { lineHeight: "2rem" }],
        },
        fontFamily: {
            KumbhSans: "Kumbh Sans, sans-serif",
        },
        extend: {},
    },
    plugins: [],
};
