import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px'
    },
    fontFamily: {
      'sans' : ['Inter', 'ui-sans-serif', 'system-ui'],
      'head' : ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif' : ['Playfair Display', 'ui-sans-serif', 'system-ui'],
    },
    fontSize: {
      xs: '0.65rem',
      sm: '0.75rem',
      md: '0.85rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'    }
  },
  plugins: [],
}
export default config
