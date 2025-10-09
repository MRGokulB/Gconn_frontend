import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';

// Import other page components as needed
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
import About from './Pages/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <TopOfficers />
      <About />
      <Announcements />
      <LatestNews />
      <EventsCalendar />
      <ResearchHighlights />
      <StatsSection />
      <LifeAtIITBombay />
      <Footer />
    </>
  );
}

export default App;