import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Announcements from './components/Announcements';
import LatestNews from './components/LatestNews';
import EventsCalendar from './components/EventsCalendar';
import ResearchHighlights from './components/ResearchHighlights';
import StatsSection from './components/StatsSection';
import LifeAtIITBombay from './components/LifeAtIITBombay';
import Footer from './components/Footer';
import TopOfficers from './components/TopOfficers';

// Pages
import FacultyPage from './Pages/Faculty';
import FacultyDetail from './Pages/FacultyDetail';
import AnnexurePage from './Pages/Annexure';
import About from './Pages/About';

// Dummy Components for other sections
// import Divisions from './Pages/Divisions';
// import Academics from './Pages/Academics';
import Admissions from './Pages/Admissions';
// import Research from './Pages/Research';
// import Career from './Pages/Career';
import Resources from './Pages/Resources';
// import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <TopOfficers />

              {/* Sections with IDs for smooth scroll */}
              <section id="about"><About /></section>
              {/* <section id="divisions"><Divisions /></section>
              <section id="academics"><Academics /></section> */}
              <section id="admissions"><Admissions /></section>
              {/* <section id="research-&-industry"><Research /></section>
              <section id="career"><Career /></section> */}
              <section id="resources"><Resources /></section>
              {/* <section id="contact-us"><Contact /></section> */}

              <Announcements />
              <LatestNews />
              <EventsCalendar />
              <ResearchHighlights />
              <StatsSection />
              <LifeAtIITBombay />
            </>
          } 
        />

        {/* Faculty Pages */}
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetail />} />

        {/* Annexure Page */}
        <Route path="/annexure" element={<AnnexurePage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;