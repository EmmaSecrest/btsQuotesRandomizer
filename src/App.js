
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
import Paper from '@mui/material/Paper';

export default function Main() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Paper
        sx={{
          backgroundImage:
            "linear-gradient(0deg, rgba(156,61,221,1) 0%, rgba(28,6,48,1) 100%)",
          height: "100vh",
        }}
      >
      <Container maxWidth='false' height= '100vw'  disableGutters>
      <main>
        {/* Hero unit */}
        <QuoteCard/>
        
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </Container>
    </Paper>
  </ThemeProvider>
  );
}