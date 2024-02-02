module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    // ... any additional content sources
  ],
  theme: {
    extend: {
      width: {
        '90': '90%',
        '95': '95%',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
          'Montserrat',
        ],
      },
      colors: {
        brand: {
          primary: "#F66A63",
          secondary: "#09959C",
        },
      },
    },
  },
}
