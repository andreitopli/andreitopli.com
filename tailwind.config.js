/* eslint-disable global-require */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    colors: {
      primary: {
        default: '#D46999',
        hover: '#FFCDCD',
      },
      white: {
        default: '#fff',
      },
      base: {
        default: '#66B8BE',
      },
      background: {
        default: '#18181A',
      },
      black: {
        default: '#18181A',
      },
    },
    extend: {
      lineHeight: {
        hero: '4.5rem',
      },
      height: {
        75: '75vh',
        90: '90vh',
      },
      objectPosition: {
        'hero-sm': '65% 0',
        'hero-md': '65% 0',
        'hero-lg': '0 90%',
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
