import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (<nav class="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bade-pill badge-secondary">{this.props.totalCounters}</span>
          </a>
        </div>
      </nav>);
    }
}
 
export default NavBar;
