import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutUs/AboutMe';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';


function App() {

  return (
    <div className='App'>


      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

