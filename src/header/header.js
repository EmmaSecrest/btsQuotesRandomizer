import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';



export default function  Header(){
    const logo = 'EmmaStudiosTransparent.png'
    return (
        <AppBar
            color = 'transparent'
            elevation={0}
            position="relative"
            textAlign='center'
           >
           
            <Toolbar
                sx= {{justifyContent:"center"}}
            >
              
               <Box 
                component='img'
                alt='logo'
                src = {logo}
                height="10vh"
                // border="1px solid white"
                
                />
              
                
            </Toolbar>
        
    </AppBar>   
    )
}