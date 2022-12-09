import React from 'react';
import img from '../icons/dddd.jpg'
function Profile(props) {
    return (
        <>
             <h3 id="about-me">About-me</h3>
        <div id="card">
        <img src={img}/>
        <div className="info">
            <h2>Vikram</h2>
            <p>Student of IT in Gundadarma univercity.</p>
            <p>Interested in Web technologies like HTML5, CSS3, JavaScript, Nodejs, AWS, etc.</p>
            <p>Love Devops and cloud computing</p>
            <p>My phone number 0817 7026 9616</p>
            <p>And i live in Bogor</p>
        </div>
        </div>

        </>
    );
}

export default Profile;