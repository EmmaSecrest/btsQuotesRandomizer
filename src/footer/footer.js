import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './copyright';

export default function Footer(){
    return(
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
       
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
        >
          Some quotes were translated from Korean and may not be accurate.
        </Typography>
        < Copyright />
      </Box>
    )
}