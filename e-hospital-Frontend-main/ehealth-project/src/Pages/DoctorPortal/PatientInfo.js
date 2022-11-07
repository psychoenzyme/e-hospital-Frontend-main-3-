import React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Footer from "../../Components/Footer";
import background from "./con13.jpg";




const theme = createTheme();


function PatientInfo(props) {
  const savedemail = window.sessionStorage.getItem("email");
  const [patient, setPatient] = React.useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      let api = 'https://fathomless-gorge-20039.herokuapp.com/api/lab/:';

      let temp = api + savedemail;
    
      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
      if(resJson?.length === 0) {
        resJson = {id: 1, name: 'abc', ID: 'R001', Email: 'xyz@gmail.com', ContactInfo: '123456789'}
       }
      setPatient(resJson)
}
fetchMyAPI();
}, []);
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

    <ThemeProvider theme={theme}>
    
      <Container component="main">
        <CssBaseline />
        

        <Toolbar sx={{ flexWrap: 'wrap' }}>

          <Typography  color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
            <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 5,
          // py: [3, 6],
        }}
      >
        </Container>
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
      
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 , marginBottom: 45}}>
            <Grid container spacing={2}>
              

              <Grid item xs={6}>
               
                 <label>Patient Name:{patient.name}</label>
                
              </Grid>
              
              <Grid item xs={6}>
               
                 <p>Patient ID:{patient.ID}</p>
                
              </Grid>
              
              <Grid item xs={6}>
               
                 <p>email:{patient.Email}</p>
                
              </Grid>
              
              <Grid item xs={6}>
               
                 <p>Contact Info:{patient.ContactInfo}</p>
                
              </Grid>
              

              
<Grid item xs={12} sm={4}>
              <Button
              
              type="submit"
              
              variant="contained"
              sx={{ mt: 0, mb: 0,mr:10 }
            }
            >
              <Link href={`/DoctorPortal/AddLab`} style={{color:'white',textTransform:'none'}}>Add Lab Result</Link> 
            </Button>
</Grid>
<Grid item xs={12} sm={4}>
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 0, mb: 0,mr:10 }}
            >
              <Link href={`/DoctorPortal/AddDrug`} style={{color:'white',textTransform:'none'}}>Add Drug Result</Link>
               </Button>
               </Grid>
            
               <Grid item xs={12} sm={4}>
            <Button
              type="button"
              
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              <Link href={`/DoctorPortal/AddDiagnosis`}style={{color:'white',textTransform:'none'}}>Add Diagnosis Result</Link>
              
            </Button>
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
  
export default PatientInfo;