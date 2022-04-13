import { createTheme , responsiveFontSizes} from '@mui/material/styles';

 const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#cb30a2',
        },
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
        allVariants: {
            color: "pink"
          },
      },
      fontSize: 15,
      h1: {
        fontSize: '2rem',
      },
      button: {
        textTransform: 'none'
      }
})
theme = responsiveFontSizes(theme)

export default theme;