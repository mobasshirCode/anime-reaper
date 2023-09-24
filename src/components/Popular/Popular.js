import React , {useState , useEffect} from 'react'

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
    
    
    
    
    </>
  )
}
