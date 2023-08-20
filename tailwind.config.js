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
      roboto: ['Roboto Flex'],
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
        dark: 900,
      },
      gridTemplateRows: {
        // Añade soporte para 'grid-rows-7', 'grid-rows-8', ..., 'grid-rows-16'
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    }, 
  },
  plugins: [require('@tailwindcss/forms')],
};
