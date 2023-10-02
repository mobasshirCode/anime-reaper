import React , {useState,useEffect} from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.scss'
export default function Home() {
    var settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false
      };
      const [slidesToShow, setSlidesToShow] = useState(1)
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1
      };
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 800) {
            setSlidesToShow(4);
          } else {
            setSlidesToShow(1);
          }
        };
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <>
            <div className='slider'>
      <Slider {...settings1}>
          <div className='slide'>
            <img src="https://wallpaper.dog/large/20466022.jpg" alt="gojo" />
            <div className="slide-content"><h3>ATTACK ON TITAN</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/114124-44utnIatIX16.jpg" alt="gojo" />
            <div className="slide-content"><h3>MORIARTY THE PATRIOT</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg" alt="gojo" />
            <div className="slide-content"><h3>DEATH NOTE</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/114308-VuYDoBJMbU1i.jpg" alt="gojo" />
            <div className="slide-content"><h3>SWORD ART ONLINE</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/98035-hbrEf8ulDnAe.jpg" alt="gojo" />
            <div className="slide-content"><h3>FATE APOCRYPHA</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://wallpaperaccess.com/full/6652214.jpg" alt="gojo" />
            <div className="slide-content"><h3>JUJUTSU KAISEN</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg" alt="gojo" />
            <div className="slide-content"><h3>DEMON SLAYER</h3>         
          </div></div>
          <div className='slide'>
            <img src="https://wallpaperaccess.com/full/1605955.jpg" alt="gojo" />
            <div className="slide-content"><h3>THAT TIME I GOT REINCARNATED AS A SLIME</h3>         
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
  <div className="slider1">
    <div className="headd"><h2><span className="blue">P</span>OPULAR</h2>
    <Link to="/popular"><button className='butt'>More</button></Link></div>
    <Slider {...settings}>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
    </Slider>
  </div>
  <div className="slider2">
    <div className="headd"><h2><span className="blue">M</span>OVIES</h2>
  <Link to="/movies"><button className='butt'>More</button></Link></div>
    <Slider {...settings}>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="try2" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="try2" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="try2" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="try2" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="try2" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="try2" />
     </div>
    </Slider></div>
  <div className="slider3">
    <div className="headd"><h2><span className="blue">M</span>ANGA</h2>
  <Link to="manga"><button className='butt'>More</button></Link></div>
    <Slider {...settings}>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" alt="try3" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" alt="try3" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" alt="try3" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" alt="try3" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" alt="try3" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" alt="try3" />
     </div>
    </Slider></div>
  <div className="top1">
    <h2>RANKING</h2>
  </div>
</div>
        <div className='row1'>
        <p>Popular Anime</p>
    </div>
    </>
  )
}
