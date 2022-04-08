import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { quotes } from '../quotesDatabase/database';
import { useState } from 'react';
import { Image } from 'mui-image';
import { Button } from '@material-ui/core';


export default function QuoteCard(){
   const quotesLength = quotes.length;
   
   const [quoteIndex ,setQuoteIndex] = useState(Math.floor(Math.random() * quotesLength))

   function getNewQuote(){
    //  console.log("You Clicked the button")
    setQuoteIndex(Math.floor(Math.random() * quotesLength))
   }
    
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
                  fontSize = {40}
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
              <Button 
                variant="outlined" 
                style ={{ color: "#d8c1e0" , fontFamily:"Arial", border:'1px solid #d8c1e0'  }} onClick = {() => getNewQuote()} > New Quote</Button>
              {/* <Button variant="outlined">Secondary action</Button>  */}
            </Stack>
          </Container>
        </Box>
    
    )
}