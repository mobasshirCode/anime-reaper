import React , {useState , useEffect} from 'react'
import './Popular.scss'
import AnimeCard from '../AnimeCard/AnimeCard'

export default function Popular() {

const [details, setDetails] = useState([])
const [page, setPage] = useState(1)

  const topAnime = async()=> {
    let url = `https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=24&page=${page}`
    let data = await fetch(url)
    let parsedData = await data.json()
    // console.log(parsedData.data)
    setDetails(parsedData.data)
  }
  
  useEffect(() => {
      topAnime()
      // eslint-disable-next-line
  }, [])

  const loadMore = async()=> {
    let url = `https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page+1}`
    let data = await fetch(url)
    let parsedData = await data.json()
 setPage(page+1)
setDetails(details.concat(parsedData.data))

  }

  return (
    <>
    <h2 className='head'>Top Anime</h2>
    <div className="innerContainer">
    {details.map((element)=> {
    return (<>
      <AnimeCard key={element.mal_id} imgurl={element.images.jpg.image_url} title={element.title_english} score={element.score}/>
    </>)
    })}
    </div>
    <div className='btnc'>
    <button className='btnMore' onClick={loadMore}>Show more</button>
    </div>
    </>
  )
}
