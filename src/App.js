import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import './App.scss'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage head="POPULAR RIGHT NOW" content="top/anime?&filter=bypopularity" />}></Route>
          <Route exact path='/top' element={<Homepage head="TOP ANIME" content="anime?&orderBy=score&sort=desc" />}></Route>
          <Route exact path='/upcoming' element={<Homepage head="UPCOMING ANIME" content="anime?&orderBy=popularity&status=upcoming" />}></Route>
          <Route exact path='/all' element={<Homepage head="FAMILY ANIME" content="anime?&orderBy=score&sort=desc&rating=g" />}></Route>
          <Route exact path='/child' element={<Homepage head="CHILDREN ANIME" content="anime?&orderBy=score&sort=desc&rating=pg" />}></Route>
          <Route exact path='/teen' element={<Homepage head="TEEN ANIME" content="anime?&orderBy=score&sort=desc&rating=pg13" />}></Route>
          <Route exact path='/17' element={<Homepage head="17+ ANIME" content="anime?&orderBy=score&sort=desc&rating=r17" />}></Route>
          <Route exact path='/18' element={<Homepage head="MILD NUDITY ANIME" content="anime?&orderBy=score&sort=desc&rating=r" />}></Route>
          <Route exact path='/treasure' element={<Homepage head="WELCOME TO THE HDDEN SECTION OF HENTAI" content="anime?&orderBy=score&sort=desc&rating=rx" />}></Route>
          <Route exact path='/manga' element={<Homepage head="TOP MANGA" content="manga?&orderBy=score&sort=desc" />}></Route>
          <Route exact path='/about' element={<Homepage head="TOP ANIME" content="anime?&orderBy=score&sort=desc&rating=all" />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
