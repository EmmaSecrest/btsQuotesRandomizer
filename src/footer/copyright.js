import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="#fff" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          BTSquotesRandomizer
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  } 