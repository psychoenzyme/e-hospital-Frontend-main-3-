import React, { useState, Fragment } from "react";
import "./diag.css";
import  {useEffect} from 'react';

function DiagResultspatient(props) {
  const savedemail = window.sessionStorage.getItem("email");
  
   

  const [data, setData] = React.useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let api = 'https://fathomless-gorge-20039.herokuapp.com/api/Diagnosis/:';

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
          <thead>
            <tr>
              <th>Diagnosis</th>
              <th>Data detected</th>
              <th>Date Cured</th>
              <th>Doctor</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr>
                <td>{data.description}</td>
                <td>{data.date_detected}</td>
               <td>{data.date_of_recovery}</td>
               <td>{data.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DiagResultspatient;