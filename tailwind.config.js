
module.exports = {
  purge: [
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif'],
    },

    spacing: {
      // https://v1.tailwindcss.com/docs/customizing-spacing#default-spacing-scale
      // 
      px: '1px',
      '0': '0',
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem',
      '64': '4rem',
      '80': '5rem',
      '96': '6rem',
      '128': '8rem',
      '160': '10rem',
      '192': '12rem',
      '224': '14rem',
      '256': '16rem',

      '10': '10px',
      '30': '30px'
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Build your palette here
        primary: '#00599A',
        secondary: '#f0f0f0',
        blue: 'rgba(0, 89, 154, 0.09)'  
      },
    },
  },
  variants: {},
  plugins: [],
}
