import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';



const theme = createTheme();


function PatientInformation(props) {
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
   

    <ThemeProvider theme={theme}>
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        

        <Toolbar sx={{ flexWrap: 'wrap' }}>

          <Typography  color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
            </Typography>
           
        </Toolbar>
        <Typography component="h6" variant="h8">
        Patient Information
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
      
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 , marginBottom: 100 }}>
            <Grid container spacing={2}>
              

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pname"
                  label="Patient Name"
                  name="pid"
                  autoComplete="Patient Name"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pid"
                  label="Patient ID"
                  name="pid"
                  autoComplete="pid"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
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
                  label="Contact Info"
                  type="contactinfo"
                  id="Contactinfo"
                  autoComplete="contactinfo"
                />
              </Grid>
              

              <Grid item xs={12}></Grid>
              
            </Grid>
          </Box>
        </Box>
      </Container>

    </ThemeProvider>
  );
}
export default PatientInformation;