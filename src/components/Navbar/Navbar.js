import React , {useState} from 'react'
import './Navbar.scss'
import { Link,NavLink } from 'react-router-dom'
import { useSearch } from '../SearchContext'
// const searchbar = document.getElementById("sbox")

export default function Navbar() {
  const [style, setStyle] = useState("sbox")
  const [menuOpen, setMenuOpen] = useState(false)
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
const {searchValue,setSearchValue} = useSearch();


const handleInputChange = (e) => {
  setSearchValue(e.target.value);
}

if(style==="sbox1"){
setInterval(() => {
  setStyle("sbox")
}, 5000);
}
const changecss = ()=>{
  setStyle("sbox1")
}
const updateMenu = ()=> {
  if(!menuOpen){
setBurgerClass("burger-bar clicked")
  }
  else {
    setBurgerClass("burger-bar unclicked")
  }
}
  return (
    <> 
    <div className="header">   
        <div className="logo">
          <a href='/'><h3>ANIME REAPER</h3></a>
        </div> 
        <div className="search">
        <input type="search" name="search"  className={style}  value={searchValue} onChange={handleInputChange} />
        <Link to={`/search?q=${searchValue}`}><button id='btn' onClick={changecss}  ><i className="fa fa-search" ></i></button> </Link>
        </div>
        </div>
      <nav id="pages">
        <div className="menu" onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <span className={burgerClass} onClick={updateMenu}></span>
          <span className={burgerClass} onClick={updateMenu}></span>
          <span className={burgerClass} onClick={updateMenu}></span>
        </div>
          <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/top">TOP ANIME</NavLink></li>
            <li><NavLink to="/upcoming">UPCOMING</NavLink></li>
            <li><NavLink to="/airing">ONGOING</NavLink></li>
            <li><NavLink to="/finished">FINISHED</NavLink></li>
            <li><NavLink to="/movies">MOVIES</NavLink></li>
            <li><NavLink to="/music">MUSIC</NavLink></li>
            <div className="dropdown">
              <button className="dropbtn">RATING{" "}
              <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <NavLink to="/all">FAMILY</NavLink>
                <NavLink to="/child">CHILDREN</NavLink>
                <NavLink to="/teen">TEENS (13+)</NavLink>
                <NavLink to="/17">VIOLANCE (17+)</NavLink>
                <NavLink to="/18">MILD NUDITY</NavLink>
              </div>
            </div>
            <li><NavLink to="/manga">MANGA</NavLink></li>
            {/* <li><NavLink to="/about">ABOUT</NavLink></li> */}
          </ul>
      </nav>
    </>
  )
}