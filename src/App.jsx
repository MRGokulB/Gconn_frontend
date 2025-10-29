import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// import Announcements from "./components/Announcements";
// import LatestNews from "./components/LatestNews";
import Events from "./components/Events";
import ResearchHighlights from "./components/ResearchHighlights";
import StatsSection from "./components/StatsSection";
import LifeAtIITBombay from "./components/LifeAtGNC";
import Footer from "./components/Footer";
import TopOfficers from "./components/TopFaculties";

// Pages
import FacultyPage from "./Pages/Faculty";
import FacultyDetail from "./Pages/FacultyDetail";
import AnnexurePage from "./Pages/Annexure";
import About from "./Pages/About";

// Dummy Components for other sections
// import Divisions from './Pages/Divisions';
// import Academics from './Pages/Academics';
import Admissions from "./Pages/Admissions";
import Research from "./components/ResearchHighlights";
// import Career from './Pages/Career';
import Resources from "./Pages/Resources";
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
              <section id="about">
                <About />
              </section>
              {/* <section id="divisions"><Divisions /></section> */}
              <section>
                <div id="academics"></div>
                <div id="admissions"></div>
                <Admissions />
              </section>
              
              {/* <section id="career"><Career /></section> */}
              <section id="resources">
                <Resources />
              </section>

              {/* <Announcements />
              <LatestNews /> */}
              <Events />
              <section id="research">
                <Research />
              </section>
              
              <StatsSection />
              <LifeAtIITBombay />
            </>
          }
        />
        <Route path="/events" element={<Events />} />
        {/* Faculty Pages */}
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetail />} />

        {/* Annexure Page */}
        <Route path="/annexure" element={<AnnexurePage />} />
      </Routes>

          <section id="contact-us">
            <Footer />
           </section>
    </Router>
  );
}

export default App;
