import React from 'react';
import "bootstrap/js/src/collapse.js";
import resume from '../images/resume.pdf';

export default function NavContainer() {
  return (

<div>
<nav className="navbar navbar-expand-lg navbar-light bg-#A9A9A9 fs-5 border-bottom border-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active" aria-current="page" href="/Contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href = { resume}  >Download Resume</a>
 
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}