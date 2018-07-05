import React from 'react';
import { Link } from 'react-router-dom';
import './myNavbar.css';

class MyNavbar extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <h1><a href="#">Similar Doctors</a></h1>
        <ul>
          <li>
            <Link to={`/category`} >Category</Link>
          </li>
          <li>
            <Link to={'/doctors'} >All Dcotors</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MyNavbar;