/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#05070C',      // Deep cyber space background
          darker: '#020306',    // Even darker background for overlays
          primary: '#8B5CF6',   // Cyber Violet (main neon color)
          secondary: '#10B981', // Emerald AI Active
          accent: '#3B82F6',    // Electric Blue
          glass: 'rgba(15, 23, 42, 0.35)', // Dark glass container
          border: 'rgba(255, 255, 255, 0.08)', // Thin glass border
          borderHover: 'rgba(139, 92, 246, 0.3)', // Hover violet border
          text: '#F3F4F6',      // Off-white text
          muted: '#9CA3AF',     // Gray text
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-primary': '0 0 15px rgba(139, 92, 246, 0.3)',
        'neon-secondary': '0 0 15px rgba(16, 185, 129, 0.3)',
      }
    },
  },
  plugins: [],
}
