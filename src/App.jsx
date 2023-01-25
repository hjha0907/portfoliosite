import React from 'react';
import {Header} from'./components/header/Header';
import {Nav} from'./components/nav/Nav';
import {About} from'./components/about/Sbout';
import {Skills} from'./components/skills/Skills';
import {Contact} from'./components/contact/Contact';
import {Footer} from'./components/footer/Footer';

export const App = () => {
  return (
    <div> 
        <Header />
        <Nav />
        <About />
        <Skills />
        <Contact />
        <Footer />
    </div>
  )
}
