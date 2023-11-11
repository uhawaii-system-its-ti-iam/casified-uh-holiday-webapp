/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            "sm": "768px",
            "md": "992px",
            "lg": "1200px",
        },
        extend: {
            colors: {
                "bootstrap-button-blue": "#007bff",
                "link-blue": "#0275d8",
                "gold": {
                    50: "#e4b734",
                    100: "#bd9319",
                },
                "gray": "#777",
                "ash": "#e7e7e7",
                "off-white": "#e9ecef",
            },
        },
    },
    plugins: [],
}

