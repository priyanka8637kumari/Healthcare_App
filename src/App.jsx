import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/Landingpage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/doctor-dashboard" element={<DoctorDashboardPage />}> </Route> */}
      </Routes>
    </Router>
  );
}

export default App;