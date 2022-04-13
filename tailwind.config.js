/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
      second: ['IBM Plex Mono'],
      round: ['IBM Plex Sans'],
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
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
    },
    colors: {
      primary: {
        green: '#70ED9D',
        pink: '#D46999',
      },
      secondary: {
        green: '#66B8BE',
        purple: '#1B0D44',
      },
      hover: {
        green: '#3F9F77',
      },
      white: {
        default: '#fff',
      },
      background: {
        default: '#150533',
      },
      black: {
        default: '#18181A',
      },
      text: {
        dark: '#020034',
        light: '#FFFFFF',
        subtitleGreen: '#66B8BE',
        subtitlePurple: '#6B3DA1',
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
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
