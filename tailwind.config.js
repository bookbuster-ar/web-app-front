/** @type {import('tailwindcss').Config} */
export default {
  /* darkMode: 'class', */
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
      kabut: ['Kabut', 'sans-serif'],
    },
    extend: {
      minWidth: {
        custom: '700px',
      },
      colors: {
        pinkbook: '#F8A9F8',
        bluebook: '#3456F3',
        orangebook: '#F96215',
        redbook: '#F8271C',
        yellowbook: '#FBFF1F',
        greybook: '#D9D9D980',
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
        thin: 100,
        extralight: 200,
        regular: 400,
        semibold: 500,
        bold: 700,
        dark:900,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
