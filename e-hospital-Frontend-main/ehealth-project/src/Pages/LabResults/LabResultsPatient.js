import React from "react";
import "./lab.css";
import  {useEffect} from 'react';
import { Link } from 'react-router-dom'; 

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
      if(resJson?.length === 0) {
        resJson = [
          {id: 1, test_name: 'abc', date_test_taken: '30/05/21', artifacts: 'af', reffered_by: 'rutu'},
          {id: 2, test_name: 'cde', date_test_taken: '30/05/21', artifacts: 'af', reffered_by: 'rutu2'},
          {id: 3, test_name: 'fgh', date_test_taken: '30/05/21', artifacts: 'af', reffered_by: 'rutu3'}, 
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
               
               
                <td><Link to={`DetailedReport/${data?.id}`}>Open</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DiagResultspatient;