import React from "react";
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <nav className="navBar">
      <FontAwesomeIcon icon={faGlobe} className="globe" />
      <h1 className="siteTitle">My Travel Journal</h1>
    </nav>
  )
}