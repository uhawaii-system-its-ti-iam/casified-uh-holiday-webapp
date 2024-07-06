/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './app/!**!/!*.{js,ts,jsx,tsx,mdx}',
        './components/!**!/!*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    fontFamily: {
        'cinzel-regular': ['cinzel-regular', 'serif'],
        'cinzel-decorative-bold': ['cinzel-decorative-bold', 'sans-serif'],
        'cormorant-upright-regular': ['cormorant-upright-regular', 'cursive']
    },
    plugins: [require("tailwindcss-animate")],
}
/*

/!** @type {import('tailwindcss').Config} *!/
module.exports = {
  content: [
    './app/!**!/!*.{js,ts,jsx,tsx,mdx}',
    './components/!**!/!*.{js,ts,jsx,tsx,mdx}',
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
*/
