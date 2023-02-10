
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutUs/AboutMe';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
// import LocomotiveScroll from 'locomotive-scroll';



function App() {
  return (

    <div className='App'>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

    </div>

  );
}

export default App;
