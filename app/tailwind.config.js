/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            "xs": "36em",
            "sm": "48em",
            "md": "62em",
            "lg": "75em",
            "xl": "88em"
        },
        fontFamily: {
            'cinzel-regular': ['cinzel-regular', 'serif'],
            'cinzel-decorative-bold': ['cinzel-decorative-bold', 'sans-serif'],
            'cormorant-upright-regular': ['cormorant-upright-regular', 'cursive']
        },
        extend: {
            colors: {
                "link-blue": "#0275d8",
                "gold": "#bd9319",
                "gray": "#777",
                "ash": "#e7e7e7",
                "off-white": "#e9ecef",
                "light-dark": {
                    "3-4": "light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
                    "7-0": "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
                }
            }
        },
    },
    plugins: [],
}
