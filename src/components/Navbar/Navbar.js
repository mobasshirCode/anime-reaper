import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <> 
    {/* <div className="header">    */}
        <div className="logo">
          <a href='/'><h3>ANIME REAPER</h3></a>
        </div>
        
      <nav id="pages">
        {/* <div id="second"> */}
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/top">TOP ANIME</Link></li>
            <li><Link to="/upcoming">UPCOMING</Link></li>
            <div className="dropdown">
              <button className="dropbtn">RATING
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/all">FAMILY</Link>
                <Link to="/child">CHILDREN</Link>
                <Link to="/teen">TEENS (13+)</Link>
                <Link to="/17">VIOLANCE (17+)</Link>
                <Link to="/18">MILD NUDITY</Link>
              </div>
            </div>
            <li><Link to="/manga">MANGA</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
          {/* </div> */}
      </nav>
          {/* <hr /> */}
      {/* </div> */}
    </>
  )
}
