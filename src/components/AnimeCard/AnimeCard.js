import React from 'react'
import './AnimeCard.scss'

export default function AnimeCard(props) {
  return (
    <div className='card'>
      <img src={props.imgurl} alt="anime" />
      <h6>&#11088;{props.score}</h6>
      <h3>{props.title}</h3>
    </div>
  )
}
