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
          DEFAULT: '#b91c2e',
          dark: '#9a1725',
          light: '#dc3545',
        },
        gold: '#C5A059',
        background: '#f6f6f8',
        surface: '#ffffff',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(135deg, #b91c2e 0%, #d62f45 100%)',
      },
    },
  },
  plugins: [],
}
export default config
