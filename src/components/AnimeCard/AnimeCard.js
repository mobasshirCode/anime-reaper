import React from "react";
import "./AnimeCard.scss";



export default function AnimeCard(props) {
  // const openDetails = ()=>{
  // console.log("details show")
  //   <Detail imgurl='{props.imgurl}'/>
  // }
  return (
    <div className="card">
      <div className="top">
      <img src={props.imgurl} alt="anime" /> 
      <h6 className="rank">#{props.rank}</h6>
      <h6 className="score">&#11088;{props.score}</h6>
      <div id="top-side">
        <button className="btn"><a target="_blank" rel="noreferrer"href={props.trailer}>{props.type!=="Manga"?"Trailer":""}</a></button>
      <h6>{props.type!=="Manga"?"Source : ":""}{props.source}</h6>
      <h6>Status : {props.status}</h6>
      <h6>{props.type==="TV"?"Season : ":""}{props.season}</h6>
      <h6>{props.type!=="Manga"?"Episodes : ":""}{props.ep}</h6>
      <h6>{props.type!=="Manga"?"Duration : ":""}{props.duration}</h6>
      <h6>{props.type==="TV"?"Aired : ":props.type==="Movie"?"Aired : ":""}{props.aired}</h6>
      {/* <h6>{props.type==="Movie"?"Released : ":""}{props.released}</h6> */}
      <h6>{props.type==="Manga"?"Published : ":""}{props.published}</h6>
      </div></div>
      <h5 className="title">{props.title}</h5>
      <h6 className="plot">{props.plot}</h6>
      
    </div>
  );
}
