import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="start">
        <Link to="/" className="nav-link">REACT PRACTICE</Link>
      </div>
      <div className="end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/component1" className="nav-link">Employee Detail</Link>
          </li>
          <li className="nav-item">
            <Link to="/component2" className="nav-link">Add Employee</Link>
          </li>
          <li className="nav-item">
            <Link to="/component3" className="nav-link">Component 3</Link>
          </li>
          <li className="nav-item">
            <Link to="/component4" className="nav-link">UseCallBack</Link>
          </li>
          <li className="nav-item">
            <Link to="/component5" className="nav-link">UseReducer</Link>
          </li>

            {/* <li className="nav-item">
                <Link to="/single/:id" className="nav-link">Specific Employee</Link>
            </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
