/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        candy: {
          pink: '#FF80AB',
          blue: '#81D4FA',
          purple: '#B39DDB',
          yellow: '#FFE082',
          green: '#2E7D32',
          red: '#FF8A80',
        },
        cake: {
          light: '#FFF8E1',
          DEFAULT: '#FFECB3',
          dark: '#FFD54F',
        },
        frosting: {
          light: '#F8BBD0',
          DEFAULT: '#F48FB1',
          dark: '#EC407A',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'candy-gradient': 'linear-gradient(to right, #FF80AB, #81D4FA, #B39DDB)',
        'frosting-gradient': 'linear-gradient(to bottom, #F8BBD0, #F48FB1)',
      },
    },
  },
  plugins: [],
};