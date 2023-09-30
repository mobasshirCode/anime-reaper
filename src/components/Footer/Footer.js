import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="topc">
                        <div className="cont cont1">
                            <h3>ANIME REAPER</h3>

                            <p>An all in one anime information app.</p>
                            <p>Bookmark us so that in future we may help you in finding the right anime to waste your time on.</p>
                        </div>
                        <div className="nexttwo">
                        <div className="cont cont2">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/top">TOP ANIME</Link></li>
                            <li><Link to="/upcoming">UPCOMING</Link></li>
                            <li><Link to="/airing">ONGOING</Link></li>
                            <li><Link to="/finished">FINISHED</Link></li>
                            <li><Link to="/manga">MANGA</Link></li>
                        </div>
                        <div className="cont cont3"><Link>ABOUT US</Link>
                            <div>CONTACT ME
                                <p>mobasshir.code@gmail.com</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="bottom">
                        <div className="icon">
                            <div className="icons">
                               <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/mobasshircode/"> <FaLinkedinIn /></a>
                            </div>
                            <div className="icons">
                               <a target='_blank' rel="noreferrer" href="https://github.com/mobasshirCode"> <FaGithub /></a>
                            </div>
                            <div className="icons">
                               <a target='_blank' rel="noreferrer" href="https://www.instagram.com/r_mobasshir/"> <FaInstagram /></a>
                            </div>
                    </div>
                            <div className="last"><p>Copyright © 2023 Anime Reaper. All Rights Reserved.</p></div></div>
                </div>
            </div>
        </>
    )
}
