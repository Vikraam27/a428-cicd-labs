import React, { useEffect } from 'react';
import Nav from './component/Nav'
import './App.css'
import Banner from './component/Banner';
import Projects from './component/Projects';
import Profile from './component/Profile';
import Footer from './component/Footer';

function App(props) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });
  }, [])
  return (
    <div>
      <Nav />
      <Banner />
      <main>
        <Projects />
        <Profile />
        <Footer />
      </main>
    </div>
  );
}

export default App;