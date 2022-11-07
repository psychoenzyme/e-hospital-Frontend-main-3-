import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Footer from "../../Components/Footer";
import background from "./con5.webp";



const theme = createTheme();


function contact_us(props) {
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
    <div style={{ backgroundImage: `url(${background})` }}>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}> 

    <ThemeProvider theme={theme} >
    
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
       
      
        <Toolbar sx={{ flexWrap: 'wrap' }} >

          <Typography  color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
            </Typography>
           
        </Toolbar>
        <Typography component="h6" variant="h8">
            Feedback...!
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
      
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 , marginBottom: 25}}>
            <Grid container spacing={2}>
              

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="MailAddress"
                  label="Your Name"
                  name="MailAddress"
                  autoComplete="Mail Address"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="MailAddress"
                  label="MailAddress"
                  name="MailAddress"
                  autoComplete="Mail Address"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Contactinfo"
                  label="Contactinfo"
                  type="email"
                  id="Contact info"
                  autoComplete="emailaddress"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Contactinfo"
                  label="Comments"
                  type="email"
                  id="Contact info"
                  autoComplete="emailaddress"
                />
              </Grid>
              

              <Grid item xs={12}></Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              Thank You
            </Button>
            </Grid>
          </Box>
        </Box>
      
      </Container>
          <Footer/>
    </ThemeProvider>
    </div>
    </div>
  );
}
export default contact_us;