import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useSearch } from '../SearchContext'


export default function Navbar() {
const {searchValue,setSearchValue} = useSearch();
// const [searchClicked,setSearchClicked] = useState(false);

const handleInputChange = (e) => {
  setSearchValue(e.target.value);
}
// const handleSearch = ()=> {
//   setSearchClicked(true);
// }

  return (
    <> 
    <div className="header">   
        <div className="logo">
          <a href='/'><h3>ANIME REAPER</h3></a>
        </div> 
        <div className="search">
        <input type="search" name="search" id="sbox" value={searchValue} onChange={handleInputChange} />
        <Link to={`/search?q=${searchValue}`}><button id='btn'><i class="fa fa-search"></i></button> </Link>
        </div>
        </div>
      <nav id="pages">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/top">TOP ANIME</Link></li>
            <li><Link to="/upcoming">UPCOMING</Link></li>
            <div className="dropdown">
              <button className="dropbtn">RATING{" "}
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
      </nav>
    </>
  )
}
