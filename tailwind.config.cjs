/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11, 61, 28, 0.16)',
        glow: '0 0 0 1px rgba(247,147,30,0.25), 0 20px 50px rgba(247,147,30,0.18)'
      },
      colors: {
        market: {
          dark: '#14602B',
          leaf: '#4C9A2A',
          orange: '#F7931E',
          orange2: '#FF6B1A',
          cream: '#FAFBF7',
          deepest: '#0B3D1C'
        }
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%,100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.08)' }
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        slowSpin: 'slowSpin 18s linear infinite'
      }
    }
  }
};
