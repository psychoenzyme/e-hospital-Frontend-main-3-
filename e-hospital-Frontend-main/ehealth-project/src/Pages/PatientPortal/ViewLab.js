import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "../../Components/Footer";
import background from "./medical1.jpg";

const theme = createTheme();
function  ViewLab(props) {
 
    const handleSubmit = (event) => {
      event.preventDefault();
      try {
  
        const data = new FormData(event.currentTarget);
        const value = Object.fromEntries(data.entries());
        console.log(value);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(value)
        };
        const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/createUser', requestOptions)
          .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else window.location.href='/route/Login' ;
          })
          console.log('response is ' + JSON. stringify(response));
          
       
          
  
      } catch (err) {
        console.log(err);
      }
  
    };
  
    return (
      
      <div style={{ backgroundImage: `url(${background})` ,backgroundSize: 'cover'}}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}> 
  
      <ThemeProvider theme={theme}>
      
        <Container component="main" maxWidth="xs">
        <GlobalStyles styles={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
          <CssBaseline />
          
          
          
  
          <Toolbar sx={{ flexWrap: 'wrap' }}>
  
            <Typography  color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
              eHospital
              </Typography>
             
          </Toolbar>
          <Typography component="h6" variant="h8">
              Patient Laboratory Result
            </Typography>
          <Box
            sx={{
              marginTop: 2,
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 1
            }}
          >
        
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 }}>
              <Grid container spacing={2}>
                
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="pname"
                    label="Patient Name"
                    name="pname"
                    autoComplete="pname"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Age"
                    label="Age"
                    name="Age"
                    autoComplete="Age"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    autoComplete="emailaddress"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Contactinfo"
                    label="Contactinfo"
                    type="Contactinfo"
                    id="Contact info"
                    autoComplete="Contactinfo"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="presult"
                    label="Patient Result"
                    type="presult"
                    id="presult"
                    autoComplete="presult"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="testtakenby"
                    label="Test Taken By"
                    type="testtakenby"
                    id="testtakenby"
                    autoComplete="testtakenby"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                    name="Date"
                    label="Date"
                    type="Date"
                    id="Date"
                    defaultValue="Date"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Comments"
                    label="Comments"
                    type="Comments"
                    id="Comments"
                    autoComplete="Comments"
                  />
                </Grid>
                
  
                
                
              </Grid>
            </Box>
          </Box>
        </Container>
        <Footer/>
  
      </ThemeProvider>
      </div>
      </div>
    );      
  
};

export default  ViewLab;