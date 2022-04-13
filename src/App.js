
import CssBaseline from '@mui/material/CssBaseline';
import QuoteCard from './quoteCard.js/QuoteCard';
import Footer from './footer/footer';
import Container from '@mui/material/Container';
import {  ThemeProvider } from '@mui/material/styles';
import  theme  from './theme';
import Box from '@mui/material/Box';

export default function Main() {
  return (
  <Box sx ={{ minHeight: '100vh',
  overflow: 'hidden',
  flex: 1,
  backgroundImage:
            "linear-gradient(0deg, rgba(156,61,221,1) 0%, rgba(28,6,48,1) 100%)",
  }}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    
    <Box  display="flex"
            flexDirection="column"
            sx={{minHeight: '100vh', overflow: 'hidden'}}>

        <Box sx={{flex: 1}}>
          <Container maxWidth='false' disableGutters>
            <QuoteCard/>
          </Container>
        </Box>

        <Footer />
      </Box>
    
  </ThemeProvider>
  </Box>
  );
}