import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "../../Components/Footer";
function PricingContent() {
    return (
        
  
     
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
        <CssBaseline />
        <div 
          style={{  
            backgroundImage: "url(" + require("./con6.jpg") + ")",
            backgroundColor: 'rgba(255,255,255,0.5)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
  
          }}
        >
  
     
  
  
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}   >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            CORNERSTONE PROGRAMS
            </Typography>
            <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >  
        </Container>
          <Typography variant="h5" align="center" color="Dark blue" component="p" >
           Acute Rehabilitation
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Childbirth
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Critical care
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Emergency
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Geriatrics
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Medicines
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Medical test
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Mental health
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Surgery
          </Typography>
        

          
         
          </Container>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            
            mt: 0,
            py: [3, 6],
          }}
        >
          
          
        </Container>
        <Footer/>
        </div>
      </React.Fragment>
      
    );
  }
  
  export default function Pricing() {
    return <PricingContent />;
  }