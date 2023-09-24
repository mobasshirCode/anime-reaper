import React , {useState , useEffect} from 'react'
import './Popular.scss'
import AnimeCard from '../AnimeCard/AnimeCard'

export default function Popular() {

const [details, setDetails] = useState([])

  const topAnime = async()=> {
    let url = "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData.data)
    setDetails(parsedData.data)
  }
  
  useEffect(() => {
      topAnime()
  }, [])

  return (
    <>
    <h2 className='head'>Top Anime</h2>
    <div className="innerContainer">
    {details.map((element)=> {
    return (
      <AnimeCard imgurl={element.images.jpg.image_url} title={element.title_english}/>
    )
    })}
    
    </div>
  
    </>
  )
}
