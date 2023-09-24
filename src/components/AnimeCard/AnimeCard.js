import React from 'react'
import './AnimeCard.scss'

export default function AnimeCard(props) {
  return (
    <div className='card'>
      <img src={props.imgurl} alt="image" />
      <h3>{props.title}</h3>
    </div>
  )
}
