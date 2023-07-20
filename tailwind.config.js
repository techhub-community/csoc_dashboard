/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orangee: "#FF904D",
        lightorange: "#FFBD58",
        lightyellow: "#FEEA9D",
        skincolor:"#FFBD58",
        easy:"#FEAA70",
        free:"#F4EEE9",
        redishorange:"#EF7E4C",
        reddish:"#FB3800",
        greyy:"#F4EEE9",
        cream:"#FCE8E0",
        lightblack:"#4E4039",
        orange2:"#FE995C",

        
        whitish:"#fef9f4",
        badge: "#FE995C",


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
