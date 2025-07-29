module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f6f8f6',
          100: '#e8f5e8',
          200: '#d1ebd1',
          300: '#a7f3a7',
          400: '#7de87d',
          500: '#6EE76E',
          600: '#4AE54A',
          700: '#3bd83b',
          800: '#2eb82e',
          900: '#259b25',
        },
        'mint': {
          50: '#f0fdf0',
          100: '#e8f5e8',
          200: '#d1f2d1',
          300: '#a3e6a3',
          400: '#6dd76d',
          500: '#47c547',
          600: '#36a336',
          700: '#2e852e',
          800: '#266a26',
          900: '#225622',
        },
        'cream': {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fbfbfb',
          300: '#f8f8f8',
          400: '#f5f5f5',
          500: '#f2f2f2',
          600: '#e8e8e8',
          700: '#d1d1d1',
          800: '#bababa',
          900: '#a3a3a3',
        },
        'off-white': '#F9FAF9',
        'soft-gray': '#F4F8F4',
        'text-dark': '#2D3F2F',
        'text-medium': '#4A5D4C',
        'text-light': '#6B7D6D',
        'border-light': '#E1EDE1',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'sage': '0 4px 20px rgba(110, 231, 110, 0.1)',
        'sage-lg': '0 8px 30px rgba(110, 231, 110, 0.15)',
        'sage-xl': '0 20px 60px rgba(110, 231, 110, 0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
