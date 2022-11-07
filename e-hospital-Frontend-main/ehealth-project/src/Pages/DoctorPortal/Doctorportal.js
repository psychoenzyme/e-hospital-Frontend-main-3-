import React, {useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import background from "./con13.jpg";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const patientData = [
  {id: 1, name: 'Rutu', pid: 'R001', email: 'rutu@gmail.com', cnum: '6134567895'},
  {id: 2, name: 'Janvi', pid: 'J001', email: 'janvijogal@gmail.com', cnum: '2456789514'},
  {id: 3, name: 'Shweta', pid: 'S001', email: 'Shewta@gmail.com', cnum: '1234567891'}, 
];

function DoctorPortal() {
  const navigate = useNavigate();
  const savedemail = window.sessionStorage.getItem("email");
  console.log(savedemail);

 const [data, setData] = React.useState([])
 const [searchKey, setSearchKey] = React.useState([])


 
   async function fetchMyAPI(key) {
     let api = 'https://fathomless-gorge-20039.herokuapp.com/api/lab/:';

     let temp = api + savedemail + (key ? '&key='+key : '');
    try {
     let res = await fetch(temp, {
       method: "GET"
     });
     let resJson = await res.json();
     if(resJson?.length === 0) {
       resJson = [...patientData];
     }
     if(key) {
      resJson= patientData.filter(item=>item.name.indexOf(key)>=0) 
      
     }
     setData(resJson)
    } catch (err) {
      console.log(err);
      setData(patientData)
    }
   }
   function searchData(){
    // setSearchKey(key);
    fetchMyAPI(searchKey);
   }
   useEffect(() => {
 fetchMyAPI();
 }, [])



  
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
      
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Doctor Portal
        </Typography>
       
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Access to all your Patients health records just a click away!
        </Typography>

        <Grid item xs={12}>
                            <TextField
                              value={searchKey}
                              onChange={(e)=>setSearchKey(e.target.value)}
                              required
                              id="standard-basic" label="Patient Name" variant="standard" />
                              <Button variant="contained" onClick={()=>searchData()} >Search</Button>
        </Grid>
       

      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
      <Grid container spacing={8} alignItems="flex-end">
  
</Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
        >
      
        <Grid container spacing={4} justifyContent="space-evenly">
        <form>
        <table>
          <thead>
            <tr>

              <th>Patient Name</th>
              <th>Patient ID</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Action</th> 
              </tr>
          </thead>
          <tbody>
            {data.map((data) => (
                          
              <tr>
                <td>{data.name}</td>
                <td>{data.pid}</td>
               <td>{data.email}</td>
               <td>{data.cnum}</td>
              
               <td><Link to={`/PatientInfo/${data?.id}`}>Open</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
       

      </form>
        </Grid>
        
        </Container>  
        <Footer/>

    
    
    </React.Fragment>
    </div>
    </div>
  );
}



export default DoctorPortal;