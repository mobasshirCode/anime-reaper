import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Home from './components/Home/Home'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import { SearchProvider } from './components/SearchContext'
import SearchPage from './components/SearchPage/SearchPage'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/popular' element={<Homepage head="POPULAR RIGHT NOW" content="top/anime?&filter=bypopularity" />}></Route>
          <Route exact path='/top' element={<Homepage head="TOP ANIME" content="anime?&orderBy=score&sort=desc" />}></Route>
          <Route exact path='/upcoming' element={<Homepage head="UPCOMING ANIME" content="anime?&orderBy=popularity&status=upcoming" />}></Route>
          <Route exact path='/airing' element={<Homepage head="ONGOING ANIME" content="anime?&orderBy=popularity&status=airing" />}></Route>
          <Route exact path='/finished' element={<Homepage head="FINISHED ANIME" content="anime?&orderBy=popularity&status=complete" />}></Route>
          <Route exact path='/movies' element={<Homepage head="POPULAR MOVIES" content="anime?&orderBy=popularity&type=movie&status=complete" />}></Route>
          <Route exact path='/music' element={<Homepage head="POPULAR MUSIC" content="anime?&orderBy=score&sort=desc&type=music" />}></Route>
          <Route exact path='/all' element={<Homepage head="FAMILY ANIME" content="anime?&orderBy=score&sort=desc&rating=g" />}></Route>
          <Route exact path='/child' element={<Homepage head="CHILDREN ANIME" content="anime?&orderBy=score&sort=desc&rating=pg" />}></Route>
          <Route exact path='/teen' element={<Homepage head="TEEN ANIME" content="anime?&orderBy=score&sort=desc&rating=pg13" />}></Route>
          <Route exact path='/17' element={<Homepage head="17+ ANIME" content="anime?&orderBy=score&sort=desc&rating=r17" />}></Route>
          <Route exact path='/18' element={<Homepage head="MILD NUDITY ANIME" content="anime?&orderBy=score&sort=desc&rating=r" />}></Route>
          <Route exact path='/treasure' element={<Homepage head="HIDDEN HENTAI SECTION" content="anime?&orderBy=score&sort=desc&rating=rx" />}></Route>
          <Route exact path='/manga' element={<Homepage head="TOP MANGA" content="manga?&orderBy=score&sort=desc" />}></Route>
          <Route exact path='/about' element={<Homepage head="TOP ANIME" content="anime?&orderBy=score&sort=desc&rating=all" />}></Route>
          <Route exact path='/search' element={<SearchPage head="SEARCH RESULT" content="anime?q=" />}></Route>
        </Routes>
        <Footer/>
        </SearchProvider>
      </BrowserRouter>

    </div>
  )
}
