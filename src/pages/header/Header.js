import React from 'react'
import '../../pages/header/Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={require('../../assest/Group.jpg')} className="img" alt="images not found" srcset="" />
                <h5> One more Time</h5>
                <div className="btn">
                    <button className="btn btn-primary   float-end" size='large'> Producer</button>
                    <button className="btn btn-primary  float-end" size='small'>signup google</button>
                </div>
            </div>
        </>

    )
}

export default Header
