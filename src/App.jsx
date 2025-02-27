import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/Landingpage"
import DoctorDashboard from './pages/Doctor/DoctorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/doctor-dashboard" element={<DoctorDashboard />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;