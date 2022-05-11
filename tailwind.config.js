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
      xxs: '0.55rem',
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
        card: '#1B0D44',
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
      backgroundImage: {
        'colored-border':
          'linear-gradient(94.36deg, #A60CDA 62.5%, #9EDBFE 99.66%)',
      },
      keyframes: {
        spaceman: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        blocksZoom: {
          '0%': {
            transform: 'scale(100%)',
          },
          '100%': {
            transform: 'scale(105%)',
          },
        },
        codeForeground: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(5px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        codeForeground2: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(7px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        codeBackground: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(3px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        meteor1: {
          '0%': {
            transform: 'translateY(0) translateX(0)',
            opacity: 1,
          },
          '70%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translateY(1000%) translateX(-1000%)',
            opacity: 0,
          },
        },
      },
      animation: {
        'spaceman-float': 'spaceman 4s ease-in-out infinite',
        'code-foreground-float': 'codeForeground 4s ease-in-out infinite',
        'code-background-float': 'codeBackground 5s ease-in-out infinite',
        'code-foreground-float2': 'codeForeground2 4s ease-in-out infinite',
        'meteor-1': 'meteor1 1.5s linear infinite',
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
