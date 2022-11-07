import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import GlobalStyles from '@mui/material/GlobalStyles';




const theme = createTheme();

function Layout(props) {


  return (
   
       <Toolbar sx={{ flexWrap: 'wrap' }} >
          <Typography variant="h6" color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
          </Typography>
        </Toolbar>
    
  )
}
export default Layout;