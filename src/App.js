
import CssBaseline from '@mui/material/CssBaseline';
import QuoteCard from './quoteCard.js/QuoteCard';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {  ThemeProvider } from '@mui/material/styles';
import  theme  from './theme';
import Paper from '@mui/material/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}






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
      <main>
        {/* Hero unit */}
        <QuoteCard/>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </Paper>
    </ThemeProvider>
  );
}