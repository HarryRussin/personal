module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      amatic: '"Amatic SC"',
      bowlby: '"Bowlby One SC"',
      akaya: '"Akaya Telivigala"',
      lilita: '"Lilita One"',
      reggae: '"Reggae One"'
    },
    screens: {
      'xs': '470px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    theme: {
      extends: {
        colors: {
          light: '#1b2536',
          dark: '#dbeaff'
        },
      },
    },
    plugins: [],

  }
}
