import React from 'react';
import {Header} from'./components/header/Header.jsx';
import {About} from'./components/about/About.jsx';
import {Skills} from'./components/skills/Skills.jsx';
import {Contact} from'./components/contact/Contact.jsx';
import {Footer} from'./components/footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import'./index.css';


export const App = () => {
  return (
    <Router>
    <div> 
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />        
        </Routes> 
        <Footer />
    </div>
    </Router>
  )
}
