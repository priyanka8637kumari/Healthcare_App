import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/Landingpage"
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import LoginDoc from './pages/Login/LoginDoc';
import LoginLabTech from './pages/Login/LoginLabTech';
import LoginPatient from './pages/Login/LoginPatient';
import LabTechDashboard from './pages/LabTechnician/LabTechDashboard';
import SignupDoc from './pages/Signup/SignupDoc';
import SignupLabTech from './pages/Signup/SignupLabTech'; 
import SignupPatient from './pages/Signup/SignupPatient';
import EditProfileDoc from './pages/EditProfile/EditProfileDoc';
import EditProfileLabTechnician from './pages/EditProfile/EditProfileLabTechnician';
import EditProfilePatient from './pages/EditProfile/EditProfilePatient';
import MedicalRecordsDoc from './pages/Doctor/MedicalRecordsDoc ';
import ViewAppointments from './pages/Doctor/ViewAppointments';
import DoctorMessage from './pages/Doctor/DoctorMessage';
import PatientDashboard from './pages/Patient/PatientDashboard';
import PlaceHolderPage from './components/PlaceHolderPage/PlaceHolderPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/doctor" element={<LoginDoc />} />
        <Route path="/login/labtech" element={<LoginLabTech />} />
        <Route path="/login/patient" element={<LoginPatient />} />  
        <Route path="/signup/doctor" element={<SignupDoc />} />
        <Route path="/signup/labtech" element={<SignupLabTech />} />
        <Route path="/signup/patient" element={<SignupPatient />} />  
        <Route path="/edit-profile/doctor" element={<EditProfileDoc />} />
        <Route path="/edit-profile/labtech" element={<EditProfileLabTechnician />} />
        <Route path="/edit-profile/Patient" element={<EditProfilePatient />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />}/>
        <Route path="/doctor-medicalrecords" element={<MedicalRecordsDoc />}/>
        <Route path="/doctor-viewappointments" element={<ViewAppointments />}/>
        <Route path="/doctor-message" element={<DoctorMessage />}/>
        <Route path="/labtech-dashboard" element={<LabTechDashboard />}/>
        <Route path="/patient-dashboard" element={<PatientDashboard />}/>
        <Route path="/doctor-messages" element={<DoctorMessage />}/>
        <Route path="/placeholderpage" element={<PlaceHolderPage />} /> 
      </Routes>
    </Router>
  );  
}

export default App;