import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "../../Components/Footer";
function PricingContent() {
    return (
        
  
     
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
        <CssBaseline />
        <div 
          style={{  
            backgroundImage: "url(" + require("./medical1.jpg") + ")",
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
            NEWS & INFORMATION
            </Typography>
            <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >  
        </Container>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           EHospital Newsrooms
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           EHospital Blog
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           EHospital YouTube Channel
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Report to the Community
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Facebook
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Twitter
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           LinkedIn
          </Typography>
        </Container>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            
            mt: 10,
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