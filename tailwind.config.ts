import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        // ===== TARGET COLOR PALETTE =====
        // Blue-teal (richer, more blue than green)
        'brand-teal': {
          DEFAULT: "#005F73",
          light: "#007080",
          dark: "#004D5E",
        },
        // Gold/Champagne accent
        'brand-gold': {
          DEFAULT: "#C09B83",
          light: "#D4B19A",
          dark: "#A8856D",
        },
        // Cream/Beige panel
        'brand-cream': {
          DEFAULT: "#E6DED9",
          dark: "#D9CFC8",
        },
        'brand-dark-text': "#1F2A33",
        // Legacy aliases for backwards compatibility
        teal: {
          DEFAULT: "#005F73",
          dark: "#004D5E",
          light: "#007080",
        },
        cream: {
          DEFAULT: "#E6DED9",
          dark: "#D9CFC8",
        },
        gold: {
          DEFAULT: "#C09B83",
          dark: "#A8856D",
          light: "#D4B19A",
        },
        darkText: "#1F2A33",
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
  plugins: [
    require("tailwindcss-animate"),
    function({ addBase }: any) {
      addBase({
        '*': {
          borderColor: 'hsl(var(--border))',
        },
      })
    }
  ],
}

export default config
