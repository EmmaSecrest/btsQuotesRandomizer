
import CssBaseline from '@mui/material/CssBaseline';
import QuoteCard from './quoteCard.js/QuoteCard';
import Footer from './footer/footer';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {  ThemeProvider } from '@mui/material/styles';
import  theme  from './theme';

export default function Main() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Container maxWidth='false' height= '100vw'  disableGutters>
      <main>
        {/* Hero unit */}
        <QuoteCard/>
        
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </Container>
  </ThemeProvider>
  );
}