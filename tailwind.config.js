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
        fadeIn: {
          '0%': {
            opacity: '0',
            filter: 'blur(5px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0px)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
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
    themes: [
      'dracula',
      'winter',
      'emerald',
      'synthwave',
      'aqua',
      'halloween',
      'corporate',
    ],
  },
  plugins: [require('daisyui')],
};
