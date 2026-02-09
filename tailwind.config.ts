import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A84C',
          light: '#F5E6B8',
          dark: '#8B6914',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#1A1A2E',
          gray: '#2D2D44',
        },
        light: {
          DEFAULT: '#F5F5F5',
          gray: '#E8E8E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
