import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import background from "./con14.jpg";
import Footer from "../../Components/Footer";



const theme = createTheme();


function Login(props) {

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(document.getElementById("LoginForm"));
      if (!(data.get('email').toLowerCase().indexOf("provider") >= 0))
      {
        window.sessionStorage.setItem("provideremail",'xxx');
      let api = 'https://fathomless-gorge-20039.herokuapp.com/api/user/:';

      let temp = api + data.get('email')
      
      // localStorage.setItem("email", data.get('email'))
      window.sessionStorage.setItem("email", data.get('email'));
     

      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
    
      
      if (!(resJson.length === 0)){

      
        let dbpassword = resJson[0].password;
        let dbpatientid = resJson[0].patient_id;
        window.sessionStorage.setItem("patientid", dbpatientid);
       
        
      if (res.status === 200) {


        if (data.get('password') === dbpassword) {
          
         
          window.location.href = '/route/PatientPortal';
        }
        else {
          alert("invalid passoword")
        }
        

      } else {
        console.log("Some error occured in fetching api");
      }
     
    
  }
 
    else {
      alert("no record exists");
    }
    }


    else{
      const patientemail = prompt('Please enter patient email')
      

      let api = 'https://fathomless-gorge-20039.herokuapp.com/api/user/:';

      let temp = api + data.get('email')

      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
    
      
      if (!(resJson.length === 0)){

      
        let dbpassword = resJson[0].password;
        let dbpatientid = resJson[0].patient_id;
        
      if (res.status === 200) {


        if (data.get('password') === dbpassword) {
          window.sessionStorage.setItem("provideremail",data.get('email'));

          let api = 'https://fathomless-gorge-20039.herokuapp.com/api/user/:';

          let temp = api + patientemail

	         let res = await fetch(temp, {
              method: "GET"
             });
            let resJson = await res.json();
            
	        if (!(resJson.length === 0)){
              let dbpatientid = resJson[0].patient_id;
            window.sessionStorage.setItem("patientid", dbpatientid);
            window.sessionStorage.setItem("email", patientemail);

          window.location.href = '/route/PatientPortal';
        
      if (!(res.status === 200)) {
		console.log("Some error occured in fetching api");
      }
      } 
 
    else {
      alert("no patient exists");
    }
        }
        else {
          alert("invalid passoword")
        }
        

      } else {
        console.log("Some error occured in fetching api");
      }
 
  }
 
    else {
      alert("no record exists");
    }
     
    }
  }

   catch (err) {
      console.log(err);
    }
  };


  return (
    <div style={{ backgroundImage: `url(${background})` ,backgroundSize: 'cover' }}> 
    <div style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}> 

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
          </Typography>
        </Toolbar>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
                 Sign in 
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 , marginBottom: 25}}>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 1 }} id='LoginForm' >
            <Grid sx={{  width: 1  }} >
            <Grid >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
               
               </Grid>
               <Grid >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             </Grid>
             <Grid>
             
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
           <Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
           
            >
              Sign In
            </Button>
            </Grid>
            <Grid item>
                <Link href="/SignUp" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          
          </Box>
        </Box>
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
    </div>
      </div>
  );
};
export default Login;

