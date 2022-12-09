import React from 'react';

function Banner(props) {
    return (
        <div className="banner" id="banner">
        <div className="content">
            <h1 tabIndex="0">Hi I'm Vikram</h1>
            <p tabIndex="0">I'm graduate from Gundadarma univercity majoring informatic engginering. <br/>And Experince In Backend, front end dan devops</p>
            <button className="btn" href="#projects">Get Started</button>
        </div>
    </div>
    );
}

export default Banner;