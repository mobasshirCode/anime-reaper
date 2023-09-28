import React, { useState, useEffect } from "react";
import "./SearchPage.scss";
import AnimeCard from "../AnimeCard/AnimeCard";
import { Link } from "react-router-dom";
import { useSearch } from "../SearchContext";
import useDebounce from "../useDebounce";


export default function SearchPage(props) {
  const [details, setDetails] = useState([]);
//   const [totalPage, setTotalPage] = useState([])
  const [page, setPage] = useState(1);
  const {searchValue } = useSearch();
  const debouncedValue = useDebounce(searchValue, 500);
// const {searchValue} = useSearch();
// const [searchResults, setSearchResults] = useState([]);

  const SearchAnime = async () => {
    const url = `https://api.jikan.moe/v4/${props.content}${searchValue}&sfw&limit=24&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // setTotalPage(parsedData.pagination);
    setDetails(parsedData.data);
    // setSearchValue("");
  };

  useEffect( () => {
    
    setPage(1);
    window.scrollTo(0, 0);
    if (debouncedValue) {
      SearchAnime();
    }
      // eslint-disable-next-line
  }, [debouncedValue]);

  const loadMore = async () => {
    let url = `https://api.jikan.moe/v4/${props.content}${searchValue}&sfw&limit=24&page=${page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page + 1);
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
                title={!element.title_english?element.title:element.title_english}
                score={element.score}
                rank={element.rank}
                type = {element.type}
                plot={element.synopsis!==null?(element.synopsis.includes("MAL")?element.synopsis.slice(0,element.synopsis.length - 25):element.synopsis):""}
                aired={element.type==="TV"?element.aired.string:element.type==="Movie"?element.aired.string:""}
                published={element.type==="Manga"?element.published.string:""}
                duration={element.type!=="Manga"?element.duration:""}
                source={element.type!=="Manga"?element.source:""}
                season={element.type!=="Manga"?element.season:""}
                status={element.status}
                ep={element.type!=="Manga"?element.episodes:""}
                trailer={element.type==="TV"?element.trailer.url:element.type==="Movie"?element.trailer.url:""}
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
