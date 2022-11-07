import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "../../Components/Footer";

const footers = [
  {
    title: 'ACCESSIBILITY LIST  ',
    description: [{name:'Doctors list',pageURL: 'Accessibility'}],
  },
];


function PricingContent() {
    return (
        
  
     
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
        <CssBaseline />
        <div 
          style={{  
            backgroundImage: "url(" + require("./bg_ehospital.jpg") + ")",
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
            Hospital Visit
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
           Accessibility
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Consent of Treatment Information
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Maps
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Patient Bill Of Rights and Responsibilities
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Privacy and Confidentiality
          </Typography>
          <Typography variant="h5" align="center" color="Dark blue" component="p">
           Visiting Hours
          </Typography>

        </Container>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            
            mt: 20,
            py: [3, 6],
          }}
        >

<Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.name}>
                    <Link href={item.pageURL} variant="subtitle1" color="text.secondary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
    

        </Container>
        <Footer/>
        </div>
      </React.Fragment>
      
    );
  }
  

  export default function Pricing() {
    return <PricingContent />;
  }