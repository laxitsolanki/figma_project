import { Outlet, Link } from "react-router-dom";
import Header from "./header/Header";
import Backgroundimg from "./background/Backgroundimg";
import Footer from "./footer/Footer";
import Home from "./Home";
import '../pages/Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <Header />
        <Backgroundimg />
        <Home/>
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
        <Footer />
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
