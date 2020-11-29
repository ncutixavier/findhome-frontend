import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {NavLink} from 'reactstrap'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer__content">
                <div className="footer__content__about">
                    <h1>About Us</h1>
                    <p>ahome is platform that helps everyone looking for house for rent in Rwanda</p>
                </div>
                <div className="footer__content__contact">
                    <h1>Our Contacts</h1>
                    <div>
                        <div><MailOutlineIcon/></div>
                       <Link to="mailto:ncuti60@gmail.com" className="email"><div>ncutixavier@gmail.com</div></Link> 
                    </div>
                    <div>
                        <div><CallIcon /></div>
                        <div>+250783573335</div>
                    </div>
                    <div>
                        <div><LocationOnIcon /></div>
                        <div>Kigali, Rwanda</div>
                    </div>
                </div>
                <div className="footer__content__social">
                    <h1>Follow us</h1>
                    <div className="d-flex">
                        <NavLink href="https://web.facebook.com/ndagijimana.xavier.1" target="_blank"><FacebookIcon className="icon"/></NavLink>  
                        <NavLink href="https://twitter.com/ncutixavier" target="_blank"><TwitterIcon className="icon" /></NavLink>
                        <NavLink href="http://Linkedin.com/in/ncuti-xavier-979284197" target="_blank"><LinkedInIcon className="icon"/></NavLink>
                        <NavLink href="https://www.instagram.com/ncutixavier/?hl=en" target="_blank"><InstagramIcon className="icon"/></NavLink>      
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                Copyright © 2020 ahome. All rights reserved.
            </div>
        </div>
    )
}

export default Footer

