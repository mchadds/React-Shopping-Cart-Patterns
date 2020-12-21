import React, { Component } from 'react';

// This is a stateless functional component
// Note: Can't use lifecycle hooks in stateless functional components
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav class="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bade-pill badge-secondary">
            {totalCounters}
          </span>
      </a>
      </div>
    </nav>
  );
};

export default NavBar;
