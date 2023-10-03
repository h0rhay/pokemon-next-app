/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'background-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'wobble-dance': {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
          '12.5%': {
            transform: 'translate(-1px, 0px) rotate(-12deg) scale(1.1)',
          },
          '25%': {
            transform: 'translate(-2px, 0px) rotate(-24deg) scale(1.2)',
          },
          '37.5%': {
            transform: 'translate(-1px, 0px) rotate(-12deg) scale(1.1)',
          },
          '50%': { transform: 'translate(0px, 0px) rotate(0) scale(1)' },
          '62.5%': {
            transform: 'translate(1px, 0px) rotate(12deg) scale(1.1)',
          },
          '75%': { transform: 'translate(2px, 0px) rotate(24deg) scale(1.2)' },
          '87.5%': {
            transform: 'translate(1px, 0px) rotate(12deg) scale(1.1)',
          },
          '100%': { transform: 'translate(0px, 0px) rotate(0) scale(1)' },
        },
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'background-flow': 'background-flow 5s ease-in-out infinite',
        'wobble-dance':
          'wobble-dance 1s cubic-bezier(0.560, 0.005, 0.110, 1.650) infinite',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite',
      },
      fontFamily: {
        display: ['var(--font-pokemon)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
