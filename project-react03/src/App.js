import React from "react";
import Company from "./Components/Pages/Company";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import NewProject from "./Components/Pages/NewProject";
import Container from "./Components/layout/Container";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Projects from "./Components/Pages/Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
