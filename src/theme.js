import { createTheme } from '@mui/material/styles';
const gradient = 'linear-gradient(0deg, rgba(156,61,221,1) 0%, rgba(28,6,48,1) 100%)';

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
          default: gradient,
          paper: '#743fb9',
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
})

export default theme;