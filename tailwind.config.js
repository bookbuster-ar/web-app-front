/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      minWidth: {
        custom: '700px',
      },
      colors: {
        primary: '#020617',
        secondary: '#0f172a',
        secondaryBorder: '#1e293b',
        first: {
          default: '#20A5FF',
          50: '#e9f6ff',
          100: '#d2edff',
          200: '#bce4ff',
          300: '#a6dbff',
          400: '#90d2ff',
          500: '#20A5FF',
          600: '#136399',
          700: '#105380',
          800: '#0d4266',
          900: '#0a314c',
        },
        second: '#0f172a',
        neutral: {
          0: '#FFFFFF',
          50: '#FDFDFD',
          100: '#F9F9F9',
          200: '#F3F3F3',
          300: '#E8E8E8',
          400: '#D8D8D8',
          500: '#A8A8A8',
          600: '#888888',
          700: '#686868',
          900: '#2A2A2A',
        },
        success: {
          50: '#16E33D',
        },
        danger: {
          50: '#FF0000',
        },
        text: {
          primary: '#EEEEEE',
          secondary: '#6A6A6A',
        },
      },
      spacing: {
        none: 0,
        sm: '8px',
        md: '16px',
        mdPlus: '24px',
        lg: '32px',
        lgPlus: '48px',
        xl: '64px',
        xxl: '80px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        h1: '48px',
        h2: '36px',
        h3: '24px',
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
