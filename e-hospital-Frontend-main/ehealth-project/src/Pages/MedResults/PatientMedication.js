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
function  PatientMedication(props) {
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
    <div style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover' }}>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}> 
       <ThemeProvider theme={theme}>
    
    <Container component="main" maxWidth="xs">
    <GlobalStyles styles={{
      backgroundImage: "url(" + require("./con17.webp") + ")",
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
          Patient Medication
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
    
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 ,marginBottom: 18}}>
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
                name="mediname"
                label="Medicine name"
                type="medicine Name"
                id="mediname"
                autoComplete="mediname"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="medifrequency"
                label="Medicine frequency"
                type="medifrequency"
                id="medifrequency"
                autoComplete="medifrequency"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField InputLabelProps={{ shrink: true }}
                required
                fullWidth
                name="Date"
                label="Medicine Start Date"
                type="Date"
                id="Date"
                defaultValue="Date"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField InputLabelProps={{ shrink: true }}
                required
                fullWidth
                name="Date"
                label="Medicine end date"
                type="Date"
                id="Date"
                defaultValue="Date"
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
}


export default  PatientMedication;