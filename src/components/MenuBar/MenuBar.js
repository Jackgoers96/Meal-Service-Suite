import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import myFunction from './MenuBShow.js'
import './MenuBar.css';

function MenuBar() {
  return (
    <div className="headerClass">
      <div className='dropDown'>
        <button onClick={myFunction} className="dropbtn">Menu</button>
        <p id="box">This is where I wanted to write some stuff</p>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>


      </div>
    </div>


  );
}

export default MenuBar;