import React from 'react';

function Nav() {
    const showNavbar = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navigation = document.querySelector('.navigation');
    
       if (menuToggle || navigation) {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
       }
      };
    
      const closeToggle = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navigation = document.querySelector('.navigation');
    
        if (menuToggle || navigation) {
          menuToggle.classList.toggle('active');
          navigation.classList.toggle('active');
         }
      };
    return (
        <header>
        <a href="/" className="logo">My <span>Profile</span></a>
        <button onClick={showNavbar} className="menu-toggle"></button>
        <ul className="navigation">
            <li><a onClick={closeToggle} href="/">Home</a></li>
            <li><a onClick={closeToggle} href="#projects">Projects</a></li>
            <li><a onClick={closeToggle} href="#about-me">About me</a></li>
            <li><a onClick={closeToggle} href="https://www.linkedin.com/in/vikram-746b18140/">linkedin</a></li>
            <li><a onClick={closeToggle} href="https://github.com/Vikraam27">Github</a></li>
        </ul>
    </header>
    );
}

export default Nav;