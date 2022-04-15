import { createTheme } from '@mui/material/styles';

 let theme = createTheme({
    palette: {
        type: 'dark',
       
        secondary: {
          main: '#f50057',
        },
        background: {
          default: 'transparent',
          paper: 'transparent',
        },
      },
      typography: {
        fontFamily: '"Maven Pro", "Helvetica", "Arial", sans-serif' ,
        h2: {
            fontFamily: 'Maven Pro',
          },
        
      },
      fontSize: 15,
      h1: {
        fontSize: '2.3rem',
      },
      button: {
        // textTransform: 'none',
        
      }
})
// theme = responsiveFontSizes(theme)

export default theme;