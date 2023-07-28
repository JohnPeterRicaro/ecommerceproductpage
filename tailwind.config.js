/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Primaries
        'orange' : 'hsl(26, 100%, 55%)',
        'pale-orange' : 'hsl(25, 100%, 94%)',
        'very-dark-blue' : 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue' : 'hsl(220, 14%, 75%)',
        'light-grayish-blue' : 'hsl(223, 64%, 98%)',
      },
      fontFamily: {
        'kumbSans': ['var(--font-kumbSans)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
