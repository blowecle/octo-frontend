import React from "react";
import '../../css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <div className="footer-container">
                <div className="footer-artists">
                    <div className="footer-artist-container">
                        <div className="footer-artist-description">PHOTOS BY</div>
                        <Link to="https://www.jameshruiz.com/">
                            <div className="footer-artist">JAMES RUIZ</div>
                        </Link>
                        <Link to="https://www.instagram.com/perryhallphoto/">
                            <div className="footer-artist">PERRY HALL</div>
                        </Link>
                    </div>
                    <div className="footer-artist-container">
                        <div className="footer-artist-description">WEBSITE BY</div>
                        <Link to="https://github.com/blowecle">
                            <div className="footer-artist">BRANDON LOWE</div>
                        </Link>
                    </div>
                    <div className="footer-artist-container">
                        <div className="footer-artist-description">DESIGN BY</div>

                        <div className="footer-artist">EVAN FARIAS</div>
                    </div>
                    <div className="footer-artist-container">
                        <div className="footer-artist-description"></div>
                        <div className="footer-artist"></div>
                    </div>
                </div>
                <Link to="https://www.google.com/maps/place/1005+S+3rd+St,+Austin,+TX+78704/@30.2541937,-97.7573432,17z/data=!3m1!4b1!4m6!3m5!1s0x8644b51d0ee20ee7:0xce154d2a8784748f!8m2!3d30.2541937!4d-97.7547629!16s%2Fg%2F11c4rkqkyq">
                    <div className="footer-info">1005 S. 3RD ST AUSTIN, TX 78704</div>
                </Link>
            </div>
    )
}

export default Footer;