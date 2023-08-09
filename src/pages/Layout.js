import { Outlet, Link } from "react-router-dom";
import '../pages/Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <div className="header">
          <img src={require('../assest/Group.jpg')} className="img" alt="images not found" srcset="" />
          <h5> One more Time</h5>
          <div className="btn">
            <button className="btn btn-primary   float-end" size='large'> Producer</button>
            <button className="btn btn-primary  float-end" size='small'>signup google</button>
          </div>
        </div>
        <div className="back">
          <div className="textback">
            Discover the movies which you wanted<br />
            to Watch everyday
          </div>
          <img className="imges" src={require('../assest/Group1.png')} alt="" srcset="" />

          <img className="group2" src={require('../assest/group2.png')} alt="" srcset="" />
          <img className="group3" src={require('../assest/Group3.png')} alt="" srcset="" />
          <img className="group4" src={require('../assest/group2.png')} alt="" srcset="" />
          <img className="group50" src={require('../assest/Group50.png')} alt="" srcset="" />
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <img className="group8" src={require('../assest/Group8.png')} alt="" srcset="" />
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;//////////

// import React from 'react';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <header>Header</header>
//       <main>{children}</main>
//       <footer>Footer</footer>
//     </div>
//   );
// };

// export default Layout;
