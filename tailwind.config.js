/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020617',
          900: '#030712',
          800: '#0F172A',
          700: '#111827',
          600: '#1E293B',
        },
        accent: {
          blue: '#38BDF8',
          purple: '#A855F7',
          cyan: '#22D3EE',
          pink: '#EC4899',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'orbit-slow': 'spin 40s linear infinite',
        'orbit-fast': 'spin 25s linear infinite reverse',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(56,189,248, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
