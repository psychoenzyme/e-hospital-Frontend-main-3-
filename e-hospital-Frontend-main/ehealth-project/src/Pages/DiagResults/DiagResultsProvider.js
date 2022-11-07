import React, { useState, Fragment } from "react";
import "./diag.css";
import  {useEffect} from 'react';
import { nanoid } from "nanoid";

function MedResultstemp(props) {
    const [data, setData] = React.useState([])
    const savedemail = window.sessionStorage.getItem("email");
   console.log(savedemail);
  
  useEffect(() => {
    async function fetchMyAPI() {
        let api = 'https://fathomless-gorge-20039.herokuapp.com/api/Diagnosis/:';

        let temp = api + savedemail;
      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
      setData(resJson)
      console.log(resJson)
     
    }
  fetchMyAPI();
  }, [])

  const [addFormData, setAddFormData] = useState({
    Diagnosis: "",
    Datedetected: "",
    Datecured: "",
    Doctor: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    
    const newPatient = {
      id: nanoid(),
      Diagnosis: addFormData.Diagnosis,
      Datedetected: addFormData.Datedetected,
      Datecured: addFormData.Datecured,
      Doctor: addFormData.Doctor,
    };

    const newPatients = [...data, newPatient];
    setData(newPatients);
    const savedpatientid = window.sessionStorage.getItem("patientid");
    const min = Math.ceil(0);
    const max = Math.floor(2147);
    const diagid = Math.floor(Math.random() * (max - min) + min); 

    let payload={
      "patient_id":savedpatientid,
      "diagid" :diagid,
      "Diagnosis":newPatient.Diagnosis,
      "Datedetected": newPatient.Datedetected,
      "Datecured":newPatient.Datecured,
      "Doctor":newPatient.Doctor
    }

    console.log(payload);
    console.log(newPatients);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    };
    const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/creatediagdata', requestOptions)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
      })
      console.log('response is ' + JSON. stringify(response));
  };

  const handleDeleteClick = (patientId,event) => {
  
    const savedpatientid = window.sessionStorage.getItem("patientid");
    const newpatientarray = [...data];

    const index = data.findIndex((data) => data.id === patientId);

    let deleteddata = newpatientarray.splice(index, 1);
    console.log(deleteddata);
    
    let data1={
      //change this hard coded value
      "patient_id":savedpatientid,
      "description":deleteddata[0].description
      
    }
    setData(newpatientarray);


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data1)
    };

    const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/deletediagdata', requestOptions)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
      })
      console.log('response is ' + JSON. stringify(response));

  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr>
                 <td>{data.description}</td>
                <td>{data.date_detected}</td>
               <td>{data.date_of_recovery}</td>
               <td>{data.doctor}</td>
               
               <td>
               <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
        
               </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add an entry</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Diagnosis"
          required="required"
          placeholder="Enter a Diagnosis name.."
          onChange={handleAddFormChange}
        />
     
        <input
          type="date"
          name="Datedetected"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="Datecured"
          required="required"
          onChange={handleAddFormChange}
        />
           <input
          type="text"
          name="Doctor"
          required="required"
          placeholder="Enter Doctor name.."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default MedResultstemp;