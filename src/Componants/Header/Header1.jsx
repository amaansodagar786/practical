import React from 'react';
import './Header1.scss';
import Phone from '../../Assets/ReactJs_Practical_assets/Phone Green.png';
import Email from '../../Assets/ReactJs_Practical_assets/Email.png';
import Fb from '../../Assets/ReactJs_Practical_assets/white/facebook 1.png';
import Twitter from '../../Assets/ReactJs_Practical_assets/white/Twitter.png';
import Linkedin from '../../Assets/ReactJs_Practical_assets/white/linkedin.png';
import Utube from '../../Assets/ReactJs_Practical_assets/white/Vector-1.png';

const Header1 = () => {
    return (
        <>
            <header className='Header'>
                <div className='head'>
                    <div className="contact-info">
                        <span><img src={Phone} alt="phn" />&nbsp; Call Us : +91 1234567890</span>
                        <span><img src={Email} alt="Eml" />&nbsp; Email : info@gmail.com</span>
                    </div>

                    <div className='social'>
                        <span><img src={Fb} alt="Fb" /></span>
                        <span><img src={Twitter} alt="Twitter" /></span>
                        <span><img src={Linkedin} alt="Linkedin" /></span>
                        <span><img src={Utube} alt="Utube" /></span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header1;
