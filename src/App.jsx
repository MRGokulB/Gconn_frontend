import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FacultyPage from './Pages/Faculty';
import FacultyDetail from './Pages/FacultyDetail';
import AnnexurePage from './Pages/Annexure';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './pages/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:name" element={<FacultyDetail />} />
        <Route path="/annexures" element={<AnnexurePage />} />
        {/* <Route path="/about" element={<About />} />  */}
        {/* Add more pages/routes here */}
      </Routes>
    </Router>

  );
}

export default App;