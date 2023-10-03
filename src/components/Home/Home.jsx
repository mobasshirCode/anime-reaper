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
        autoplay: true,
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
          if (window.innerWidth > 1600) {
            setSlidesToShow(4);
          } else if (window.innerWidth > 1200 && window.innerWidth <= 1600) {
            setSlidesToShow(3);
          }
          else if (window.innerWidth > 760 && window.innerWidth <= 1200) {
            setSlidesToShow(2);
          }
          else {
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
    <div className="headd"><h2><span className="blues">P</span>OPULAR</h2>
    <Link to="/popular"><button className='butt'>More</button></Link></div>
    <Slider {...settings}>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1286/99889l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/12/85221l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1301/93586l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/2/70187l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/5/73474l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/12/76049l.jpg" alt="opm" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/11/39717l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1498/134443l.jpg" alt="try1" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1664/103275l.jpg" alt="try1" />
     </div>
    </Slider>
  </div>
  <div className="slider2">
    <div className="headd"><h2><span className="blues">M</span>OVIES</h2>
  <Link to="/movies"><button className='butt'>More</button></Link></div>
    <Slider {...settings}>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/5/87048l.jpg" alt="yourname" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1122/96435l.jpg" alt="silentvoice" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1880/101146l.jpg" alt="weathering" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1557/123313l.jpg" alt="sao" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1825/110716l.jpg" alt="violet" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1085/90759l.jpg" alt="ngnl" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/12/52415l.jpg" alt="patema" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1768/93291l.jpg" alt="pancreas" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/13/47083l.jpg" alt="fairytail" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/anime/1598/128450l.jpg" alt="suzume" />
     </div>
    </Slider></div>
  <div className="slider3">
    <div className="headd"><h2><span className="blues">M</span>ANGA</h2>
  <Link to="manga"><button className='butt'>More</button></Link></div>
    <Slider {...settings}>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/1/129447l.jpg" alt="rezero" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/3/235363l.jpg" alt="elite" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/3/258224l.jpg" alt="monster" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/3/188896l.jpg" alt="kaguya" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/2/253146l.jpg" alt="onepiece" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/1/157897l.jpg" alt="berserk" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/2/166124l.jpg" alt="grandblues" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/3/120337l.jpg" alt="jobless" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/3/161645l.jpg" alt="abyss" />
     </div>
     <div className="inner-slide">
        <img src="https://cdn.myanimelist.net/images/manga/3/216464l.jpg" alt="chainsaw" />
     </div>
    </Slider></div>
  <div className="top1">
    <h2><span className="blues">R</span>ANKING</h2>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="panel">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
    </>
  )
}
