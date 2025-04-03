/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00e676',
          dark: '#00c853',
        },
        secondary: {
          DEFAULT: '#00b0ff',
          dark: '#0091ea',
        },
        background: {
          DEFAULT: '#121212',
          light: '#1e1e1e',
          card: '#2d2d2d',
        },
        accent: '#00e676',
        danger: '#ff5252',
        success: '#69f0ae',
        warning: '#ffab40',
      },
    },
  },
  plugins: [],
} 