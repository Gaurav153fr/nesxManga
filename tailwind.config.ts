import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
    },
  },
  
  plugins: [
    function newUtilities({addUtilities}:{addUtilities:any}) {
      const newUtilities={
        ".no-scrollbar::-webkit-scrollbar":{
          "display":"none",
      },
".no-scrollbar": {
  "-ms-overflow-style": "none",  /* IE and Edge */
  "scrollbar-width": "none",  /* Firefox */
}
      
};

addUtilities(newUtilities)
}
  ],
}
export default config
