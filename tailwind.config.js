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
        "img-1" : "url('/assets/image-product-1.jpg')",
        "img-2" : "url('/assets/image-product-2.jpg')",
        "img-3" : "url('/assets/image-product-3.jpg')",
        "img-4" : "url('/assets/image-product-4.jpg')",
        "shopee-casual-1" : "url('/assets/shopee-casual-1.jpg')",
        "shopee-casual-2" : "url('/assets/shopee-casual-2.jpg')",
        "shopee-casual-3" : "url('/assets/shopee-casual-3.jpg')",
        "shopee-casual-4" : "url('/assets/shopee-casual-4.jpg')",
        "shopee-nike-1" : "url('/assets/shopee-nike-1.jpg')",
        "shopee-nike-2" : "url('/assets/shopee-nike-2.jpg')",
        "shopee-nike-3" : "url('/assets/shopee-nike-3.jpg')",
        "shopee-nike-4" : "url('/assets/shopee-nike-4.jpg')",
        "shopee-shoe-1" : "url('/assets/shopee-shoe-1.jpg')",
        "shopee-shoe-2" : "url('/assets/shopee-shoe-2.jpg')",
        "shopee-shoe-3" : "url('/assets/shopee-shoe-3.jpg')",
        "shopee-shoe-4" : "url('/assets/shopee-shoe-4.jpg')",
        "shopee-shoe-5" : "url('/assets/shopee-shoe-5.jpg')",
        "shopee-wShoe-1" : "url('/assets/shopee-women-rubber-1.jpg')",
        "shopee-wShoe-2" : "url('/assets/shopee-women-rubber-2.jpg')",
        "shopee-wShoe-3" : "url('/assets/shopee-women-rubber-3.jpg')",
        "shopee-wShoe-4" : "url('/assets/shopee-women-rubber-4.jpg')",
        "shopee-wShoe-5" : "url('/assets/shopee-women-rubber-5.jpg')",
        "shopee-womenS-1" : "url('/assets/shopee-women-shoes-1.jpg')",
        "shopee-womenS-2" : "url('/assets/shopee-women-shoes-2.jpg')",
        "shopee-womenS-3" : "url('/assets/shopee-women-shoes-3.jpg')",
        "shopee-womenS-4" : "url('/assets/shopee-women-shoes-4.jpg')",
        "shopee-womenS-5" : "url('/assets/shopee-women-shoes-5.jpg')",
        "shopee-wSneakers-1" : "url('/assets/shopee-women-sneakers-1.jpg')",
        "shopee-wSneakers-2" : "url('/assets/shopee-women-sneakers-2.jpg')",
        "shopee-wSneakers-3" : "url('/assets/shopee-women-sneakers-3.jpg')",
        "shopee-wSneakers-4" : "url('/assets/shopee-women-sneakers-4.jpg')",
        "shopee-wSneakers-5" : "url('/assets/shopee-women-sneakers-5.jpg')",
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
