/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // 채대리 브랜드 컬러
        teal: {
          50: '#F0FDFA',
          100: '#E6F7F6',
          200: '#B3E5E2',
          300: '#80D3CE',
          400: '#4DC1BA',
          500: '#20B2AA', // primary
          600: '#1A9A94', // secondary
          700: '#14827D', // dark
          800: '#0E6A66',
          900: '#08524F',
        },
        // 채대리 보조 컬러
        gray: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#1A1D20',
        },
        // 채대리 강조 컬러
        accent: {
          red: '#FF6B6B',
          teal: '#4ECDC4',
          blue: '#45B7D1',
        }
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'teal-pulse': 'tealPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'teal-float': 'tealFloat 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        tealPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        tealFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'teal': '0 4px 12px rgba(32, 178, 170, 0.3)',
        'teal-lg': '0 8px 25px rgba(32, 178, 170, 0.15)',
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #20B2AA 0%, #1A9A94 50%, #14827D 100%)',
        'teal-gradient-light': 'linear-gradient(135deg, #E6F7F6 0%, #F0FDFA 50%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
} 