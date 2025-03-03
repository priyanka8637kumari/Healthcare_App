import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/Landingpage"
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import LoginDoc from './pages/Login/LoginDoc';
import LabTechDashboard from './pages/LabTechnician/LabTechDashboard';
import SignupDoc from './pages/Signup/SignupDoc';
import MedicalRecordsDoc from './pages/Doctor/MedicalRecordsDoc ';
import ViewAppointments from './pages/Doctor/ViewAppointments';
import PatientDashboard from './pages/Patient/PatientDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/doctor" element={<LoginDoc />} />
        <Route path="/signup" element={<SignupDoc />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />}> </Route>
        <Route path="/doctor-medicalrecords" element={<MedicalRecordsDoc />}> </Route>
        <Route path="/doctor-viewappointments" element={<ViewAppointments />}></Route>
        <Route path="/labtech-dashboard" element={<LabTechDashboard />}> </Route>
        <Route path="/patient-dashboard" element={<PatientDashboard />}> </Route>
      </Routes>
    </Router>
  );  
}

export default App;