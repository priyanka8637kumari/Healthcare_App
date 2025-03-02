import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/Landingpage"
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import LoginDoc from './pages/Login/LoginDoc';
import LabTechDashboard from './pages/LabTechnician/LabTechDashboard';
import SignupDoc from './pages/Signup/SignupDoc';
import EditProfileDoc from './pages/EditProfile/EditProfileDoc';
import MedicalRecordsDoc from './pages/Doctor/MedicalRecordsDoc ';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/doctor" element={<LoginDoc />} />
        <Route path="/signup" element={<SignupDoc />} />
        <Route path="/edit-profile" element={<EditProfileDoc />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />}> </Route>
        <Route path="/doctor-medicalrecords" element={<MedicalRecordsDoc />}> </Route>
        <Route path="/labtech-dashboard" element={<LabTechDashboard />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;