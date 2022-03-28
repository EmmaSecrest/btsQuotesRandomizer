import * as React from 'react';


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {  ThemeProvider } from '@mui/material/styles';
import  theme  from '../theme';

import Typography from '@mui/material/Typography';



export default function QuoteCard(){
   
    
    return(
        <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#fff"
              fontFamily='Maven Pro'
              gutterBottom
            >
              Quote 
            </Typography>
            <Typography variant="h5" align="center" color="#fff" paragraph>
              Speaker
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
    </ThemeProvider>
    )
}