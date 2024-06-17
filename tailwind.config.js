import { THEME_VARIANTS } from './constants/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            filter: 'blur(5px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0px)',
          },
        },
        'to-top': {
          '0%': { transform: 'scale(100%)' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        'to-bottom': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(100%)' },
        },
        flip: {
          '90%': {
            transform: 'rotateY(180deg)',
          },
          '100%': {
            transform: 'rotateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'to-top': 'to-top 0.2s',
        'to-bottom': 'to-bottom 0.2s',
        flip: 'flip 0.5s',
      },
      minHeight: {
        content: 'calc(100vh - 120px)',
        'xxs-screen': 'calc(100vh - 172px)',
      },
      screens: {
        xxs: '320px',
        xs: '460px',
        md: '768px',
      },
    },
  },
  daisyui: {
    themes: THEME_VARIANTS,
  },
  plugins: [require('daisyui')],
};
