import React, { useState, Fragment } from "react";
import "./medre.css";
import  {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import background from "./con13.jpg";
import Footer from "../../Components/Footer";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function MedResultspatient(props) {
 
  const navigate = useNavigate();
  const savedemail = window.sessionStorage.getItem("email");
  console.log(savedemail);

 const [data, setData] = React.useState([])

 useEffect(() => {
   async function fetchMyAPI() {
     let api = 'https://fathomless-gorge-20039.herokuapp.com/api/lab/:';

     let temp = api + savedemail;
   
     let res = await fetch(temp, {
       method: "GET"
     });
     let resJson = await res.json();
     if(resJson?.length === 0) {
       resJson = [
         {id: 1, name: 'Rutu', pid: 'R001', issue: 'Covid', medicines: 'xyz',pres:'Dr.Dhruv'},
         {id: 2, name: 'Janvi', pid: 'J001', issue: 'Fever', medicines: 'pqr',pres:'Dr.Sapna'},
         {id: 3, name: 'Shweta', pid: 'S001', issue: 'Migren', medicines: 'abc',pres:'Dr.Rutu'}, 
       ]
     }
     setData(resJson)
     
    }
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
          Patient Medication History
        </Typography>
       
        
      </Container>
    
    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
        >
       <Box component="form"  sx={{ mt: -1 ,marginBottom: 10}}>
        <Grid container spacing={4} justifyContent="space-evenly">
        <form>
        <table>
          <thead>
            <tr>

              <th>Patient Name</th>
              <th>Patient ID</th>
              <th>Health Issue</th>
              <th>Medicine</th>
              <th>Prescriped by</th> 
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {data.map((data) => (
                          
              <tr>
                <td>{data.name}</td>
                <td>{data.pid}</td>
               <td>{data.issue}</td>
               <td>{data.medicines}</td>
               <td>{data.pres}</td>
               <td><Link to={`/MedResultsProvider`}>Open</Link></td>
              
          
              </tr>
            ))}
          </tbody>
        </table>
       

      </form>
        </Grid>
        
        </Box>
        </Container>
        </React.Fragment>
        <Footer/>
        </div>
        </div>
  );
};

export default MedResultspatient;