import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { quotes } from '../quotesDatabase/database';
import { useState } from 'react';
import { Image } from 'mui-image';
import { Button } from '@material-ui/core';
// import Grid from '@mui/material/Grid';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  } from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
  } from "react-share";
import { Grid } from '@mui/material';


export default function QuoteCard(){
   const quotesLength = quotes.length;
   
   const [quoteIndex ,setQuoteIndex] = useState(Math.floor(Math.random() * quotesLength))

   function getNewQuote(){
    //  console.log("You Clicked the button")
    setQuoteIndex(Math.floor(Math.random() * quotesLength))
   }

  // need to stop quote reshuffle on reload
  
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
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Button 
                    variant="outlined" 
                    style ={{ color: "#d8c1e0" , fontFamily:"Arial", border:'1px solid #d8c1e0'  }} onClick = {() => getNewQuote()} > New Quote</Button> <br/>
                </Grid>
                <Grid item container direction = 'horizontal' justifyContent = 'center'>
                    <Grid item>
                    <FacebookShareButton 
                          quote={quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                          url= 'secret.com' // change later
                          hashtag='#btsARMY #btsQuotesRandomizer'
                          > 
                        <FacebookIcon />
                        </FacebookShareButton>
                    </Grid>
                    <Grid item>
                      <LinkedinShareButton
                        title= {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        summary= "Check out more at BTSquotesRandomizer"
                        source='BTS Quotes Randomizer'
                        url="google.com" // change later
                      >
                        <LinkedinIcon/>
                      </LinkedinShareButton>
                    </Grid>
                    <Grid item>
                      <EmailShareButton 
                        subject='BTS Quote of the Day!'
                        body={quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        url='test.com' // change later
                        openShareDialogOnClick
                        onClick={() => {}}
                      >
                        <EmailIcon />
                      </EmailShareButton>
                    </Grid>
                    <Grid item>
                      <RedditShareButton
                        title= {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        url ="test.com" // change later
                      >
                        <RedditIcon/>
                      </RedditShareButton>
                    </Grid>
                    <Grid item>
                     <TwitterShareButton
                      title = {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                      hashtags = {['BTSarmy' , 'BTSquotesRandomizer' ,"BTS"]}
                      url ='test.com' // change later
                     >
                       <TwitterIcon />
                     </TwitterShareButton>
                    </Grid>
                    <Grid item> 
                      <WhatsappShareButton
                        title = {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        url = 'test.com' // change later
                      >
                        <WhatsappIcon />
                      </WhatsappShareButton>
                    </Grid>
                </Grid>
                
              </Grid>
               
              {/* <Button variant="outlined">Secondary action</Button>  */}
            </Stack>
          </Container>
        </Box>
    
    )
}