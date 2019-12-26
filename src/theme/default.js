import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const themeDefault = createMuiTheme({
    palette: {
        primary: {
          light: '#000000',
          main: '#000000',
          dark: '#000000',
        },
        secondary: {
          light: '#20B2AA',
          main: '#20B2AA',
          dark: '#20B2AA',
        }
      },

})

export default themeDefault;