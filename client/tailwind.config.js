const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: '0 10px 20px rgb(55 55 89 / 8%)',
        menu: '0 36px 48px rgb(27 25 148 / 8%)',
      },
      borderRadius: {
        ms: '0.25rem',
      },
    },
    colors: {
      blue: '#5e72e4',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#ee3232',
      orange: '#fd7e14',
      yellow: '#fffa6f',
      green: '#297f00',
      teal: '#20c997',
      cyan: '#3065d0',
      white: '#fff',
      gray: '#6c757d',
      grayDark: '#343a40',
      primary: '#5e37ff',
      secondary: '#673bb7',
      success: '#10d876',
      info: '#50e3c2',
      warning: '#fe9431',
      danger: '#ff788e',
      light: '#f8f9fa',
      dark: '#1f2641',
      body: {
        bg: '#F6F8FE',
        text: '#8691b4',
      },
      border: 'rgba(55, 55, 89, 0.1)',
      heading: '#1F2641',
      muted: '#AEAED5',
      transparent: 'transparent',
    },
    screens: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    // maxWidth: {
    //   sm: '540px',
    //   md: '720px',
    //   lg: '960px',
    //   xl: '1199px',
    //   ...defaultTheme.maxWidth,
    // },
  },

  plugins: [require('@tailwindcss/forms')],
};
