import React, { useState } from "react";
import "./lab.css";
import  {useEffect} from 'react';
import { nanoid } from "nanoid";

function MedResultstemp(props) {
    const [data, setData] = React.useState([])

  
  useEffect(() => {
    async function fetchMyAPI() {
      const savedemail = window.sessionStorage.getItem("email");
        let api = 'https://fathomless-gorge-20039.herokuapp.com/api/lab/:';

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
    testname: "",
    Datetesttaken: "",
    artifacts: "",
    reffered_by: "",
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
      testname: addFormData.testname,
      Datetesttaken: addFormData.Datetesttaken,
      artifacts: addFormData.artifacts,
      reffered_by: addFormData.reffered_by,
    };

    const newPatients = [...data, newPatient];
    setData(newPatients);
    // const savedpatientid = localStorage.getItem("patientid");
    const savedpatientid = window.sessionStorage.getItem("patientid");
    const min = Math.ceil(1);
    const max = Math.floor(2147);
    const labid = Math.floor(Math.random() * (max - min) + min); 


    let payload={
      "patient_id":savedpatientid,
      "lab_id" :labid,
      "test_name":newPatient.testname,
      "date_test_taken": newPatient.Datetesttaken,
      "artifacts":newPatient.artifacts,
      "reffered_by":newPatient.reffered_by
    }


    console.log(payload);
    console.log(newPatients);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    };
    const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/createlabdata', requestOptions)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
      })
   
  };

  const handleDeleteClick = (patientId,event) => {

    const newpatientarray = [...data];

    const index = data.findIndex((data) => data.id === patientId);

    let deleteddata = newpatientarray.splice(index, 1);
    console.log(deleteddata);
    const savedpatientid = window.sessionStorage.getItem("patientid");
    
    let data1={
      "patient_id":savedpatientid,
      "test_name":deleteddata[0].test_name
      
    }
    setData(newpatientarray);


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data1)
    };

    const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/deletelabdata', requestOptions)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
      })

  };

  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
            <th>Test name</th>
              <th>Data test taken</th>
              <th>Artifacts</th>
              <th>Reffered_by</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr>
                <td>{data.test_name}</td>
                <td>{data.date_test_taken}</td>
               <td>{data.artifacts}</td>
               <td>{data.reffered_by}</td>
               
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
          name="testname"
          required="required"
          placeholder="Enter a test name.."
          onChange={handleAddFormChange}
        />
     
        <input
          type="date"
          name="Datetesttaken"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="artifacts"
          required="required"
          placeholder="attach artifacts"
          onChange={handleAddFormChange}
        />
           <input
          type="text"
          name="reffered_by"
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