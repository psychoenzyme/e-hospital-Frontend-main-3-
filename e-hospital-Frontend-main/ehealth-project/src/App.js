
import './App.css';
import React from 'react';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp' ;

import MedResultsPatient from './Pages/MedResults/MedResultsPatient' ;
import MedResultsProvider from './Pages/MedResults/MedResultsProvider' ;
import PatientMedication from './Pages/MedResults/PatientMedication';
import DiagResultsPatient from './Pages/DiagResults/DiagResultsPatient' ;
import DiagResultsProvider from './Pages/DiagResults/DiagResultsProvider.js' ;
import LabResultsPatient from './Pages/LabResults/LabResultsPatient' ;
import DetailedReport from './Pages/LabResults/DetailedReport' ;
import LabResultsprovider from './Pages/LabResults/LabResultsProvider' ;
import PatientPortal from './Pages/PatientPortal/PatientPortal';
import DoctorPortal from './Pages/DoctorPortal/Doctorportal';
import AddLab from './Pages/DoctorPortal/AddLab';
import ViewLab from './Pages/PatientPortal/ViewLab';
import AddDrug from './Pages/DoctorPortal/AddDrug';
import ViewDrug from './Pages/PatientPortal/ViewDrug';
import AddDiagnosis from './Pages/DoctorPortal/AddDiagnosis';
import ViewDiagnosis from './Pages/PatientPortal/ViewDiagnosis';
import HomePage from './Pages/HomePage/HomePage';
import DynamicTable from './Pages/MedResults/MedResultsProvider' ;
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DetailsofPatient from './Pages/Patient/DetailsofPatient';
import AddPatient from './Pages/Patient/AddPatient';
import Patientlist from './Pages/Patient/Patientlist';
import Hospitalvisit from './Pages/HomePage/Hospital_visit';
import Cornprog from './Pages/HomePage/Corn_prog';
import Newsinfo from './Pages/HomePage/news_info';
import Contactus from './Pages/HomePage/contact_us';
import PatientInfo from './Pages/DoctorPortal/PatientInfo';
import PatientInformation from'./Pages/DoctorPortal/PatientInformation';
import Accessibility from './Pages/Accessibility';





function App() {
  return (
      <div className="App">
       <Router>
        <Routes>
        <Route path='Accessibility' element={<Accessibility/>}/>
        <Route path='SignUp' element={<SignUp />} />
        <Route path='Login' element={<Login />} />
        <Route path='PatientPortal' element={<PatientPortal />} />
        <Route path='DoctorPortal' element={<DoctorPortal />} />
        <Route path='MedResultsPatient' element={<MedResultsPatient />} />
        <Route path='MedResultsProvider' element={<MedResultsProvider />} />
        <Route path='PatientMedication' element={<PatientMedication />} />
        <Route path='LabResultsPatient' element={<LabResultsPatient />} />
        <Route path='DetailedReport/:id' element={<DetailedReport />} />
        <Route path='LabResultsProvider' element={<LabResultsprovider />} />
        <Route path='DiagResultsPatient' element={<DiagResultsPatient />} />
        <Route path='DiagResultsProvider' element={<DiagResultsProvider />} />
        <Route path='DynamicTable' element={<DynamicTable />} />
        <Route path='Patient' element={<DetailsofPatient />}/>
        <Route path='Patient/DetailsofPatients/:id' element={<DetailsofPatient />}/>
        <Route path='Patient/Patientlist' element={<Patientlist />} />
        <Route path='Patient/Add' element={<AddPatient />} />
        <Route path='Patient/Edit/:id' element={<AddPatient />} />
        <Route path='DoctorPortal/AddLab' element={<AddLab />} />
        <Route path='PatientPortal/ViewLab' element={<ViewLab />} />
        <Route path='DoctorPortal/AddDrug' element={<AddDrug />} />
        <Route path='PatientPortal/ViewDrug' element={<ViewDrug />} />
        <Route path='DoctorPortal/AddDiagnosis' element={<AddDiagnosis/>} />
        <Route path='PatientPortal/ViewDiagnosis' element={<ViewDiagnosis/>} />
        <Route path='Hospitalvisit' element={<Hospitalvisit/>}/>
        <Route path='Cornprog' element={<Cornprog/>}/>
        <Route path='Newsinfo' element={<Newsinfo/>}/>
        <Route path='Contactus' element={<Contactus/>}/>
        <Route path='PatientInfo/:id' element={<PatientInfo/>}/>
        <Route path='PatientInformation/:id' element={<PatientInformation/>}/>
         <Route path='/' element={<HomePage />} /> 
         
         
        </Routes>
        </Router>
      </div>
    
  );
};

export default App;

