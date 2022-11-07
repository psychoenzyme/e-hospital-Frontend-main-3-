import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import background from "./bg_ehospital.jpg";




function PatientPortal() {
  const navigate = useNavigate();
  const showLabResults = (event) => {
      event.preventDefault();
     console.log("button clicked");
    //  navigate('/route/LabResults');
    const provideremail = window.sessionStorage.getItem("provideremail");
    
    if (provideremail.toLowerCase().indexOf("provider") >= 0)
    {
     navigate('/route/LabResultsProvider');
    }
    else{
     navigate('/route/LabResultsPatient');
    }
  
    };
    
    const showDrugResults = (event) => {
      event.preventDefault();
    
     const provideremail = window.sessionStorage.getItem("provideremail");
     
     if (provideremail.toLowerCase().indexOf("provider") >= 0)
     {
      navigate('/route/MedResultsProvider');
     }
     else{
      navigate('/route/MedResultsPatient');
     }
  
    
      
    };
  
    const showDaigResults = (event) => {
      event.preventDefault();
     console.log("button clicked");
     const provideremail = window.sessionStorage.getItem("provideremail");
   
     if (provideremail.toLowerCase().indexOf("provider") >= 0)
     {
      navigate('/route/DiagResultsProvider');
     }
     else{
      navigate('/route/DiagResultsPatient');
     }
  
    //  navigate('/route/DiagResults');
      
    };
   
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}> 
    <React.Fragment>
      
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
     
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        
      >
        <Toolbar sx={{ flexWrap: 'wrap' }} >
          <Typography variant="h6" color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ flexWrap: 'wrap' }}    >
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            
          </Typography>
          <nav  >
           
          </nav>
          <Button href="/PatientMedication" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Medication
          </Button>
        </Toolbar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Patient Portal
        </Typography>
        {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
          Access to all your health records just a click away!
        </Typography> */}
      </Container>
      
      <Container maxWidth="md" component="main">
      <Grid container spacing={8} alignItems="flex-end">
  <Grid item md={4} key='medical' xs={12} sm={12} >
    <card>
      <CardHeader 
      title='Laboratory Results'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
      />
      <CardContent>
      <box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
       
        </box>
        <ul>
        <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                       All the laboratory results can be found here
                      </Typography>
        </ul>

      </CardContent>

      <CardActions>
      {/* <Button fullWidth variant='contained' onClick={showLabResults}>
                    view
                  </Button> */}
                   <Button
              type="button"
              align="center"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              <Link href={`PatientPortal/ViewLab`}style={{color:'white',textTransform:'none'}}>View</Link>
              
            </Button>
      </CardActions>
    </card>
  </Grid>
  <Grid item md={4} key='Diagnosis'xs={12} sm={12} >
    <card>
    <CardHeader 
      title='Drugs History'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
      />
      <CardContent>
      <box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
          
        </box>
        <ul>
        <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                      All the drugs prescribed can be found here
                      </Typography>
        </ul>

      </CardContent>
      <CardActions>
      {/* <Button fullWidth variant='contained' onClick={showDrugResults}>
                    view
                  </Button> */}
                  <Button
              type="button"
              align="center"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              <Link href={`PatientPortal/ViewDrug`}style={{color:'white',textTransform:'none'}}>View</Link>
              
            </Button>
      </CardActions>
    </card>
  </Grid>
  <Grid item md={4}  key='LabRecords' xs={6} sm={6}>
  <card >
  <CardHeader 
      title='Diagnosis Results'
      titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
      />
      <CardContent>
        <box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
     
        </box>
        <ul>
        <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                      
                      >
                        The diagnosis results can be found here
                      </Typography>
        </ul>

      </CardContent>
      <CardActions>
      {/* <Button fullWidth variant='contained' onClick={showDaigResults}>
                    view
                  </Button> */}
                  <Button
              type="button"
              align="center"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              <Link href={`PatientPortal/ViewDiagnosis`}style={{color:'white',textTransform:'none'}}>View</Link>
              
            </Button>
      </CardActions>
    </card>
  </Grid>
</Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
         
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
        
        </Grid>
    
      </Container>
      <Footer/>

    </React.Fragment>
    </div>
    </div>
  );
}



export default PatientPortal;