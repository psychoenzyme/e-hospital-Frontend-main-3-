import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Layout from "../../Components/Layout";
import Toolbar from '@mui/material/Toolbar';


function AddPatient(props) {
        const handleSubmit = (event) => { }
        return (
                <Layout>
                        <Toolbar sx={{ flexWrap: 'wrap' }}>

                                <Typography color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
                                        eHospital
                                </Typography>

                        </Toolbar>
                        <Typography component="h6" variant="h8">
                                Add Result
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

                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1, marginBottom: 100 }}>
                                        <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="Fname"
                                                                label="Patient First Name"
                                                                name="Fname"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="LName"
                                                                label="Patient Last Name"
                                                                name="LName"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>


                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="age"
                                                                label="Age"
                                                                name="age"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="cnum"
                                                                label="Contact"
                                                                name="cnum"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="email"
                                                                label="Email"
                                                                name="email"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="Ttype"
                                                                label="Patient Test Type"
                                                                name="Ttype"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="Tname"
                                                                label="Test Taken By"
                                                                name="Tname"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                required
                                                                fullWidth
                                                                id="Tresult"
                                                                label="Test Result"
                                                                name="Tresult"
                                                                autoComplete="family-name"
                                                        />
                                                </Grid>

                                                <Grid item xs={12}></Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              Add
            </Button>


                                        </Grid>
                                </Box>
                        </Box>
                </Layout>


        );
};

export default AddPatient;