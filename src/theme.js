import { createTheme } from '@mui/material/styles';

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
          default: '#743fb9',
          paper: '#7e57c2',
        },
      },
      typography: {
        fontFamily: '"Maven Pro","Roboto", "Helvetica", "Arial", sans-serif' ,
        h2: {
            fontFamily: 'Maven Pro',
          },
        allVariants: {
            color: "pink"
          },
      },
})

export default theme;