import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "../../Components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "./con5.webp";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const theme = createTheme();



function MyForm() {
    const [HealthCareProvider, setMyCar] = useState("Department");
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }

    return (
  
      <form>
        <select value={HealthCareProvider} onChange={handleChange}>
          <option value="Surgery">Surgery</option>
          <option value="Endocrinology">Endocrinology</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Gastroentrology">Gastroentrology</option>
          <option value="Gynaecology">Gynaecology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </form>
    )
  
  
  }
  
  function MyChoice() {
    const [ListofDoctors, setMyCar] = useState("Doctors");
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
  
      <form>
        <select value={ListofDoctors} onChange={handleChange}>
          <option value="Hanna Smith">Hanna Smith</option>
          <option value="Alanna">Alanna</option>
          <option value="Cara">Cara</option>
          <option value="Layla">Layla</option>
          <option value="Sam">Sam</option>
          <option value="Melissa">Melissa</option>
        </select>
      </form>
    )
  }
  <><Grid item xs={12}>
  <MyForm />
</Grid>
<Grid item xs={12}>
    <MyChoice />
  </Grid></>

export default function MyForm() {
    return <MyForm />;
  }
export default function MyChoice() {
    return <MyChoice />;
}