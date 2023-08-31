import React from 'react'
import { Link } from "react-router-dom";

import '../../pages/footer/Footer.css';

const Footer = () => {
    return (
        <>
            <div className="header">
                <img src={require('../../assest/Group.jpg')} className="img" alt="images not found" srcset="" />
                <h5> One more Time</h5>
            </div>
            <div>
            <ul>
                <li>
                    <Link to="../Home.js" className='link'>Home</Link>
                    <Link to="../Home.js" className='link1'>privacy policy</Link>
                    <Link to="../Home.js" className='link1'>Teams Use</Link>
                </li>
        </ul>
            </div>
       
        </>
    )
}

export default Footer
