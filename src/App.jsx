import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/Landingpage"
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import LabTechDashboard from './pages/LabTechnician/LabTechDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/doctor-dashboard" element={<DoctorDashboard />}> </Route>

        <Route path="/labtech-dashboard" element={<LabTechDashboard />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;