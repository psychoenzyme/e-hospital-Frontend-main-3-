import React from "react";
import "./lab.css";
import  {useEffect} from 'react';
// import { Link } from 'react-router-dom'; 

function DiagResultspatient(props) {
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
      
      setData(resJson)
     
    }
  fetchMyAPI();
  }, [])

  return (
    <div className="app-container">
      <form>
        <table>
          
            <tr>
                <td colspan="4">Brain</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
                <td>Lungs</td>
                <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
                <td>Heart</td>
                <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
                <td>Stomach</td>
                <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
                <td>Kidney</td>
                <td></td>
               <td></td>
               <td></td>
            </tr>
        </table>
      </form>
    </div>
  );
};

export default DiagResultspatient;