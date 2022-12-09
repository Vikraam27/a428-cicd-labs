import React from 'react';

function Projects(props) {
    return (
       <>
         <h3>My Projects</h3>
      <div id="projects" className="projects-container">
        <div className="card">
          <h4>Whatsapp Clone</h4>
          <p>Whatsapp clone with react and hapi.js using postgreSql and redis</p>
          <a href="https://github.com/Vikraam27/chatapp-frontend" className="btn-src">Source code</a>
        </div>
        <div className="card">
          <h4>My Doctor</h4>
          <p>Android app created by react native use for chat beetwen doctor and patient</p>
          <a href="https://github.com/Vikraam27/doctor-chat" className="btn-src">Source code</a>
        </div>
        <div className="card">
          <h4>Notes app</h4>
          <p>Notes app created using react and using state to save notes</p>
          <a href="https://github.com/Vikraam27/notes-app-react" className="btn-src">Source code</a>
        </div>
        <div className="card">
          <h4>Taco.</h4>
          <p>Progressive web app restaurant apps</p>
          <a href="https://github.com/Vikraam27/Taco." className="btn-src">Source code</a>
        </div>
        <div className="card">
          <h4>Forum Api</h4>
          <p>Api forum to create thread, comment and reply comment</p>
          <a href="https://github.com/Vikraam27/forum-api-v1" className="btn-src">Source code</a>
        </div>
        <div className="card">
          <h4>Covid-19 PWA</h4>
          <p>PWA using react.js and chart.js to display a chart of Covid-19 cases by country</p>
          <a href="https://github.com/Vikraam27/coivd19-pwa" className="btn-src">Source code</a>
        </div>
      </div>
     
       </>
    );
}

export default Projects;