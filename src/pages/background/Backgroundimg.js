import React from 'react'
import '../../pages/background/Backgroundimg.css';

const Backgroundimg = () => {
    return (
        <>
            <div className="back">
                <div className="textback">
                    Discover the movies which you wanted<br />
                    to Watch everyday
                </div>

                <img className="imges" src={require('../../assest/Group1.png')} alt="" srcset="" />

                <img className="group2" src={require('../../assest/group2.png')} alt="" srcset="" />
                <img className="group3" src={require('../../assest/Group3.png')} alt="" srcset="" />
                <img className="group4" src={require('../../assest/group2.png')} alt="" srcset="" />
                <img className="group50" src={require('../../assest/Group50.png')} alt="" srcset="" />
                <div>
                    <form action="" className='search'>
                        {/* <label for="gsearch">Search </label> */}
                        <input type="search" className='searchinput' placeholder="Search movies.." size={85} id="gsearch" name="gsearch" />
                        {/* <input type="submit" /> */}
                        <img className='searchicon' src={require('../../assest/Group5.png')} alt='' srcSet='' />
                    </form>
                </div>
            </div>



        </>
    )
}

export default Backgroundimg
