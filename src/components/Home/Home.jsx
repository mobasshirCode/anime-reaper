import React from 'react'
import Slider from 'react-slick';
import './Home.scss'
export default function Home() {
    var settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
  return (
    <>
            <div className='slider'>
      <Slider {...settings1}>
          <div className='slide'>
            <img src="https://wallpaper.dog/large/20466022.jpg" alt="gojo" />
            <div className="slide-content"><h3>AOT</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/114124-44utnIatIX16.jpg" alt="gojo" />
            <div className="slide-content"><h3>MORIARTY</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg" alt="gojo" />
            <div className="slide-content"><h3>DEATH NOTE</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/114308-VuYDoBJMbU1i.jpg" alt="gojo" />
            <div className="slide-content"><h3>SAO</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/98035-hbrEf8ulDnAe.jpg" alt="gojo" />
            <div className="slide-content"><h3>FATE APOCRYPHA</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://wallpaperaccess.com/full/6652214.jpg" alt="gojo" />
            <div className="slide-content"><h3>JJK</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg" alt="gojo" />
            <div className="slide-content"><h3>DEMON SLAYER</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg" alt="gojo" />
            <div className="slide-content"><h3>HUNTER X HUNTER</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://wallpaperaccess.com/full/1605955.jpg" alt="gojo" />
            <div className="slide-content"><h3>REINCARNATED AS A SLIME</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/125367-hGPJLSNfprO3.jpg" alt="gojo" />
            <div className="slide-content"><h3>KAGUYA SAMA : LOVE IS WAR</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://anibrain.ai/_next/image?url=https%3A%2F%2Fs4.anilist.co%2Ffile%2Fanilistcdn%2Fmedia%2Fmanga%2Fbanner%2F108428-Zm90nTeodNMI.jpg&w=3840&q=90" alt="gojo" />
            <div className="slide-content"><h3>EMINENCE IN SHADOW</h3>         
          </div></div>
        </Slider>
    </div>
    <div className="main-page">
        <div className="slider1"></div>
        <div className="slider2"></div>
        <div className="slider3"></div>
        <div className="top1"></div>
    </div>
        <div className='row1'>
        <p>Popular Anime</p>
    </div>
    </>
  )
}
