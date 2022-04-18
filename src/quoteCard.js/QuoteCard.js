import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { quotes } from '../quotesDatabase/database';
import { useState , useEffect} from 'react';
import { Button } from '@material-ui/core';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
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
   const storedIndex = Number(localStorage.getItem('quoteIndex'))
   const [quoteIndex ,setQuoteIndex] = useState(Number.isInteger(storedIndex) ? storedIndex : Math.floor(Math.random() * quotesLength))

   useEffect(() => {
    localStorage.setItem('quoteIndex', String(quoteIndex));
  }, [quoteIndex]);

   function getNewQuote(){
    //  console.log("You Clicked the button")
    setQuoteIndex(Math.floor(Math.random() * quotesLength))
   }

  // need to stop quote reshuffle on reload
  
    return(
        
        <Container
          sx={{
            bgcolor: 'background.paper',
            pt:1,
            pb: 6,
            
          }}
          maxWidth="sm"
          direction= 'column'
          justify = 'center'
        >
          
            <Box  
              sx={{md:3 , flex:1 , minHeight:"45vh"}}
            >
              
                
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="#fff"
                  fontFamily='Arial'
                  fontSize= '2.3rem'
                  >
                  {quotes[quoteIndex].quote} 
                  
                </Typography>
              
            
            <Typography variant="h5" align="center" color="#fff" paragraph fontStyle='italic'>
              - {quotes[quoteIndex].speaker}
            </Typography>
            </Box>
            
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                position='relative'
                sx={{mt: 3}}
                >
                <Grid item>
                  <Button 
                      variant="outlined" 
                      startIcon = {<KeyboardDoubleArrowRightIcon />}
                      style ={{ color: "#e7d8ed" , fontFamily:"Arial", border:'1px solid #e7d8ed', minHeight:"50px", minWidth:"75px", 
                      }} 
                      onClick = {() => getNewQuote()} > 
                      New Quote</Button> 
                </Grid>
                <Grid item>
                <Typography
                  variant='h5'
                  align="center"
                  color="#fff"
                >
                  Share on Social Media:
                </Typography>
                </Grid>
                <Grid item container direction = 'horizontal' justifyContent = 'center' >
                    <Grid item>
                    <FacebookShareButton 
                          quote={quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                          url= 'http://btsquotesrandomizer.com/' 
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
                        url="http://btsquotesrandomizer.com/" 
                      >
                        <LinkedinIcon/>
                      </LinkedinShareButton>
                    </Grid>
                    <Grid item>
                      <EmailShareButton 
                        subject='BTS Quote of the Day!'
                        body={quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        url='http://btsquotesrandomizer.com/'
                        openShareDialogOnClick
                        onClick={() => {}}
                      >
                        <EmailIcon />
                      </EmailShareButton>
                    </Grid>
                    <Grid item>
                      <RedditShareButton
                        title= {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        url ="http://btsquotesrandomizer.com/" 
                      >
                        <RedditIcon/>
                      </RedditShareButton>
                    </Grid>
                    <Grid item>
                     <TwitterShareButton
                      title = {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                      hashtags = {['BTSarmy' , 'BTSquotesRandomizer' ,"BTS"]}
                      url ='http://btsquotesrandomizer.com/' 
                     >
                       <TwitterIcon />
                     </TwitterShareButton>
                    </Grid>
                    <Grid item> 
                      <WhatsappShareButton
                        title = {quotes[quoteIndex].quote + '  -' + quotes[quoteIndex].speaker}
                        url = 'http://btsquotesrandomizer.com/' 
                      >
                        <WhatsappIcon />
                      </WhatsappShareButton>
                    </Grid>
                </Grid>
                
              </Grid>
               
              {/* <Button variant="outlined">Secondary action</Button>  */}
              {/*merge issue fixed */}
            
          
        </Container>
    
    )
}