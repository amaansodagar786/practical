import React from 'react';
import './Footer.scss';
import Logo from '../../Assets/ReactJs_Practical_assets/logo white.png';

import call from '../../Assets/ReactJs_Practical_assets/white/phone.png';
import Email from '../../Assets/ReactJs_Practical_assets/white/Email.png';
import Loc from '../../Assets/ReactJs_Practical_assets/white/Loction.png';
import Fb from '../../Assets/ReactJs_Practical_assets/white/facebook 1.png';
import Linkedin from '../../Assets/ReactJs_Practical_assets/white/linkedin.png';
import Twitter from '../../Assets/ReactJs_Practical_assets/white/Twitter.png';
import Youtube from '../../Assets/ReactJs_Practical_assets/white/Vector-1.png';

const Footer = () => {
    return (
        <footer className='mainfooter'>
            <div className="footer">
                <div className="footertop">
                    <div className="footerlogo">
                        <img src={Logo} alt="Demo Project Logo" />
                        <p>Short Tagline We offer comprehensive intelligent <br /> solutions in a variety of areas in both continuous</p>
                    </div>
                    <div className="footerlinks">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#industry">Industry Experience</a></li>
                            <li><a href="#capability">Capability Statement</a></li>
                            <li><a href="#qse">QSE Policy Statement</a></li>
                        </ul>
                    </div>
                    <div className="footerlinks">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#partners">Partners</a></li>
                            <li><a href="#news">News</a></li>
                        </ul>
                    </div>
                    <div className="footercontact">
                        <h4>Get in Touch</h4>
                        <p><img src={call} alt="Call" /> +61 424 670 940</p>
                        <p><img src={Email} alt="Email" /> info@loremipsum.com.au</p>
                        <p><img src={Loc} alt="Location" /> Office 261 South Street, Cleveland, Queensland, Australia</p>
                        <div className="socialicons">
                            <img src={Fb} alt="Facebook" />
                            <img src={Linkedin} alt="LinkedIn" />
                            <img src={Twitter} alt="Twitter" />
                            <img src={Youtube} alt="YouTube" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="footerbottom">
                <p>© 2021 Lorem Ipsum. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
