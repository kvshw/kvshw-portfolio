import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutUs/AboutMe';
import Footermobile from './components/footerMobile/Footermobile';
import MobileNavigation from './components/mobileNavigation/MobileNavigation';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 867px)');
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='App'>

      {isMobile ? <MobileNavigation /> : <Navbar />}

      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      {isMobile ? <Footermobile /> : <Footer />}
    </div>
  );
}

export default App;

