import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './copyright';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){
    return(
        <Box sx={{ bgcolor: 'background.paper', p: 6  , position: 'relative' ,bottom: '0'  ,align: 'center'}} component="footer">
       
        <Typography
          variant='h6'
          align="center"
          color="#fff"
        >
          Follow us on Twitter! 
          <TwitterIcon 
            color = '#fff'
            onClick={() =>  window.open('https://twitter.com/EmmaStudios4' , "_blank")} 
            sx = {{ml: 1 ,
              "&:hover": {
                color: '#03c2fc',
                cursor:"pointer"
              },
              // border:"1px solid red",
              position: 'relative',
              top:'0.5vh'
            }}
          />
        </Typography>
        
        
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
        >
          Some quotes were translated from Korean and may not be accurate. <br/>
          For all questions,comments,concerns or ideas  email us at emmastudiostech@gmail.com <br/>
        </Typography>
        < Copyright />
      </Box>
    )
}