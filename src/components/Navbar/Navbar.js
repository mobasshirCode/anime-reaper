import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <>
    <nav>
      <div className="first">
        <h3>ANIME REAPER</h3>
      </div>
      <div className="second">
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/top">TOP ANIME</a></li>
            <li><a href="/upcoming">UPCOMING</a></li>
            <div className="dropdown">
    <button className="dropbtn">RATING
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/all">FAMILY</a>
      <a href="/child">CHILDREN</a>
      <a href="/teen">TEENS (13+)</a>
      <a href="/17">VIOLANCE (17+)</a>
      <a href="/18">MILD NUDITY</a>
      <a href="/18+">HENTAI</a>
    </div>
  </div>
            <li><a href="/manga">MANGA</a></li>
            <li><a href="/about">ABOUT</a></li>
        </ul></div>
    </nav>
  </>
  )
}
