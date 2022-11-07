import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

 function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        eHospital
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:'transperent'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            <FacebookIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            <LinkedInIcon/>

          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}