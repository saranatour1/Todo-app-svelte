/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bb:"hsl(220, 98%, 61%)",
        bbl:"hsl(192, 100%, 67%)",
        bbr:"hsl(280, 87%, 65%)",
        // light-mode 
        vlg: '#DCE4ED',
        lgb: '#BAC4D6',
        vlgr: '#FAFAFA',
        dgb: '#5E737D',
        vdgb: '#2C3C47',
        // dark-mode
        vdb: '#050A16',
        vddb: '#040E2F',
        lgb2: '#CED8E8',
        lgbh: '#F1F5F9',
        dgb2: '#5D6D84',
        vdgb2: '#2E4861',
        vdgb3: '#1E3942',
      },
      fontFamily:{
        'joseph-sans':['Josefin Sans Variable', 'sans-serif'],
      },
      backgroundImage:{
        'lg-light':"url('/src/assets/bg-desktop-light.jpg')",
        'sm-light':"url('/src/assets/bg-mobile-light.jpg')",
        'lg-dark':"url('/src/assets/bg-desktop-dark.jpg')",
        'sm-dark':"url('/src/assets/bg-mobile-dark.jpg')",
      }
    },
  },
  plugins: [],
}

