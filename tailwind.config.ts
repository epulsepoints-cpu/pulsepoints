import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'calc(var(--radius) + 2px)',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'celebration-bounce': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '40%, 43%': { transform: 'translate3d(0, -15px, 0) scale(1.1)' },
          '70%': { transform: 'translate3d(0, -7px, 0) scale(1.05)' },
          '90%': { transform: 'translate3d(0, -2px, 0) scale(1.02)' }
        },
        'float-up': {
          '0%': { transform: 'translateY(0px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'zoom-celebration': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
        },
        // New modern animations
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'lesson-transition': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)' },
        },
        'gradient-shift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            transform: 'scale(1)'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            transform: 'scale(1.02)'
          },
        },
        'breathing': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '1'
          },
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'celebration-bounce': 'celebration-bounce 1.2s ease-in-out',
        'float-up': 'float-up 3s ease-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'zoom-celebration': 'zoom-celebration 0.8s ease-out',
        'confetti-fall': 'confetti-fall 3s ease-out infinite',
        // New modern animations
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite 2s',
        'float-slow': 'float-slow 10s ease-in-out infinite 4s',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out 0.2s both',
        'scale-in': 'scale-in 0.4s ease-out',
        'lesson-transition': 'lesson-transition 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 45px rgba(31, 38, 135, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    animate,
    typography,
    scrollbarHide,
    function({ addUtilities }: any) {
      const scrollbarUtilities = {
        '.scrollbar-elegant': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'rgba(59, 130, 246, 0.2) transparent',
          '&::-webkit-scrollbar': {
            width: '3px',
            height: '3px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
            'border-radius': '2px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(59, 130, 246, 0.2)',
            'border-radius': '2px',
            transition: 'all 0.2s ease'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(59, 130, 246, 0.4)'
          }
        }
      }
      
      const performanceUtilities = {
        '.gpu-accelerated': {
          transform: 'translateZ(0)',
          'will-change': 'transform'
        },
        '.scroll-optimized': {
          'transform': 'translateZ(0)',
          'will-change': 'scroll-position',
          'contain': 'layout style paint'
        },
        '.smooth-momentum': {
          'scroll-behavior': 'smooth',
          '-webkit-overflow-scrolling': 'touch',
          'overscroll-behavior': 'contain'
        },
        '.lesson-scroll': {
          'overflow-y': 'auto',
          'overflow-x': 'hidden',
          'scroll-behavior': 'smooth',
          '-webkit-overflow-scrolling': 'touch',
          'overscroll-behavior-y': 'contain',
          'transform': 'translateZ(0)',
          'will-change': 'scroll-position'
        },
        '.mobile-safe': {
          'min-height': '0',
          'height': '100%',
          'overflow': 'hidden'
        },
        '.lesson-container': {
          'height': '100vh',
          'max-height': '100vh',
          'overflow': 'hidden',
          'display': 'flex',
          'flex-direction': 'column'
        },
        '.lesson-content-area': {
          'flex': '1 1 0%',
          'overflow-y': 'auto',
          'overflow-x': 'hidden',
          '-webkit-overflow-scrolling': 'touch',
          'padding-bottom': 'env(safe-area-inset-bottom, 0px)'
        },
        '.lesson-nav-area': {
          'flex-shrink': '0',
          'border-top': '1px solid #e5e7eb',
          'background': 'white',
          'padding': '1rem'
        }
      }
      
      addUtilities(scrollbarUtilities)
      addUtilities(performanceUtilities)
    }
  ],
} satisfies Config;
