/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2f9',
          100: '#d5e0f0',
          200: '#abbfe0',
          300: '#7d9dce',
          400: '#527bbc',
          500: '#2f5fa8',
          600: '#1e4a8a',
          700: '#143870',
          800: '#0d2756',
          900: '#0F3460',
          950: '#081630',
        },
        teal: {
          50:  '#eaf6f8',
          100: '#c7eaed',
          200: '#8dd4db',
          300: '#4dbcc8',
          400: '#1aa3b3',
          500: '#1A7A8A',
          600: '#156470',
          700: '#104e57',
          800: '#0b383e',
          900: '#072226',
        },
        coral: {
          50:  '#fdf2ee',
          100: '#fae0d5',
          200: '#f5c1ab',
          300: '#ef9e7f',
          400: '#E8885A',
          500: '#e06e38',
          600: '#c25526',
          700: '#9e3f1b',
          800: '#7a2d12',
          900: '#561e0b',
        },
        amber: {
          400: '#F5A623',
          500: '#d4891a',
        },
        sage: {
          400: '#3A9E76',
          500: '#2d8060',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        xl:  '12px',
        '2xl': '16px',
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)',
        lifted: '0 4px 20px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}
