module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pastel': {
          mint: '#DCFCE7',
          lavender: '#F3E8FF',
          peach: '#FEF7ED',
          pink: '#FDF2F8',
          blue: '#EFF6FF',
        },
        'sage': {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a3b3a3',
          400: '#7a8e7a',
          500: '#86EFAC',
          600: '#5a6e5a',
          700: '#4a5a4a',
          800: '#3d4a3d',
          900: '#343d34',
        },
        'soft-purple': {
          50: '#faf7ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#BA8CDA',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        'cream': {
          50: '#FFFBF7',
          100: '#fef7ed',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        'cute': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out',
        'bounceIn': 'bounceIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-cute': 'pulse-cute 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-cute': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
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
        'cute': '0 8px 32px rgba(186, 140, 218, 0.12), 0 2px 16px rgba(134, 239, 172, 0.08)',
        'cute-hover': '0 12px 40px rgba(186, 140, 218, 0.2), 0 4px 20px rgba(134, 239, 172, 0.15)',
      }
    },
  },
  plugins: [],
}
