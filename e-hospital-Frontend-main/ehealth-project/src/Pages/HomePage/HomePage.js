import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



const footers = [
  {
    title: 'HOSPITAL VISIT  ',
    description: [{name:'Services',pageURL: 'Hospitalvisit'}],
  },

  {
    title: 'PROGRAMS',
    description: [{name:'Facilities',pageURL: '/Cornprog'}],
  },

  {
    title: 'INFORMATION',
    description: [{name:'Platforms',pageURL: '/Newsinfo'}],
  },
  {
    title: 'CONTACT US',
    description: [{name:'Need Help?',pageURL: '/Contactus'}],
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
        <Toolbar sx={{ flexWrap: 'wrap' }}    >
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            
          </Typography>
          <nav  >
           
          </nav>
          <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
     
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}   >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          eHospital
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
         eHealth comes with multiple options of storing your all your health data at one place and access to various 
         AI based tools to access your healthh conditions both mental and physical
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
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
      </div>
    </React.Fragment>
    
  );
}

export default function Pricing() {
  return <PricingContent />;
}