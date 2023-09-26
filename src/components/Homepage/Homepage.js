import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import AnimeCard from "../AnimeCard/AnimeCard";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(1);

  const topAnime = async () => {
    let url = `https://api.jikan.moe/v4/${props.content}&limit=24&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(url);
    setDetails(parsedData.data);
  };

  useEffect(() => {
    setPage(1);
    window.scrollTo(0, 0);
    topAnime();

    // eslint-disable-next-line
  }, [props.content]);

  const loadMore = async () => {
    let url = `https://api.jikan.moe/v4/${props.content}&limit=24&page=${page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page + 1);
    console.log(url);
    setDetails(details.concat(parsedData.data));
  };

  return (
    <>
      <h2 className="head">{props.head}</h2>
      <div className="innerContainer">
        {details.map((element) => {
          return (
            <> <div id="card">
              <AnimeCard
                key={element.url}
                imgurl={element.images.jpg.large_image_url}
                title={element.title_english}
                score={element.score}
                rank={element.rank}
                plot={element.synopsis}
                aired={element.aired.string}
                duration={element.duration}
                source={element.source}
                season={element.season}
                status={element.status}
                ep={element.episodes}
                trailer={element.trailer.url}
              />
              </div>
            </>
          );
        })}
      </div>
       
      <div className="btnc">
        <button className="btnMore" onClick={loadMore}>
          Show more
        </button>
      </div>
      <div className="hidden">
        <Link to="/treasure">.</Link>
      </div>
    </>
  );
}
