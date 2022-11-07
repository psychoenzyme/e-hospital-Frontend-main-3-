import React from "react";
import "../LabResults/lab.css";
import  {useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import Layout from "../../Components/Layout";



function Patientlist(props) {
  const savedemail = window.sessionStorage.getItem("email");

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
          {id: 1, name: 'abc', Contact_number: '123456789', Email: 'xyz@gmail.com', Test_type: 'covid'},
          {id: 2, name: 'cde', Contact_number: '123456789', Email: 'xyz@gmail.com', Test_type: 'COvid'},
          {id: 3, name: 'fgh', Contact_number: '123456789', Email: 'xyz@gmail.com', Test_type: 'Vaccine'}, 
        ]
      }
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

              <th>Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Test Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
                          
              <tr>
                <td>{data.name}</td>
                <td>{data.Contact_number}</td>
               <td>{data.Email}</td>
               <td>{data.Test_type}</td>
                <td><Link to={`/Patient/DetailsofPatients/${data?.id}`}>View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>

       
      );

}
export default Patientlist;