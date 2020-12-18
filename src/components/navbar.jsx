import React, { Component } from 'react';

// This is a stateless functional componenet
const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bade-pill badge-secondary">
            {props.totalCounters}
          </span>
      </a>
      </div>
    </nav>
  );
};

export default NavBar;
