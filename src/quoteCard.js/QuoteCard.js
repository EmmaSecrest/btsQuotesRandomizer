import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { quotes } from '../quotesDatabase/database';
import { useState } from 'react';
import { Image } from 'mui-image';


export default function QuoteCard(){
   const quotesLength = quotes.length;
   
   const [quoteIndex ,setQuoteIndex] = useState(Math.floor(Math.random() * quotesLength))
    
    return(
        
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Box>
              
                
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="#fff"
                  fontFamily='Arial'
                  fontSize = {45}
                  >
                  {quotes[quoteIndex].quote} 
                  
                </Typography>
              
            </Box>
            <Typography variant="h5" align="center" color="#fff" paragraph fontStyle='italic'>
              - {quotes[quoteIndex].speaker}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
             
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> m*/}
            </Stack>
          </Container>
        </Box>
    
    )
}