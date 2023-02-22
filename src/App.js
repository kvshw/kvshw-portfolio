import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutUs/AboutMe';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className='App'>


      <Navbar />
      <Header />
      <AboutMe />
      {/* <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

