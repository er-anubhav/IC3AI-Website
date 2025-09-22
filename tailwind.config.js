/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(239 246 255)',
          100: 'rgb(219 234 254)',
          200: 'rgb(191 219 254)',
          300: 'rgb(147 197 253)',
          400: 'rgb(96 165 250)',
          500: 'rgb(59 130 246)',
          600: 'rgb(37 99 235)',
          700: 'rgb(29 78 216)',
          800: 'rgb(30 64 175)',
          900: 'rgb(30 58 138)',
        },
        secondary: {
          50: 'rgb(250 245 255)',
          100: 'rgb(243 232 255)',
          200: 'rgb(233 213 255)',
          300: 'rgb(196 181 253)',
          400: 'rgb(167 139 250)',
          500: 'rgb(139 92 246)',
          600: 'rgb(124 58 237)',
          700: 'rgb(109 40 217)',
          800: 'rgb(91 33 182)',
          900: 'rgb(76 29 149)',
        },
        bg: {
          primary: 'rgb(var(--color-bg-primary))',
          secondary: 'rgb(var(--color-bg-secondary))',
          tertiary: 'rgb(var(--color-bg-tertiary))',
        },
        text: {
          primary: 'rgb(var(--color-text-primary))',
          secondary: 'rgb(var(--color-text-secondary))',
          muted: 'rgb(var(--color-text-muted))',
        },
        border: {
          DEFAULT: 'rgb(var(--color-border))',
          light: 'rgb(var(--color-border-light))',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}