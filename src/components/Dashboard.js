import React from "react";
import './Dashboard.css';
import {Link,useParams} from 'react-router-dom';
import ImageUpload from './Upload';
import GetData from "./Data";
import "./navbar.css";
import { useState } from "react";

// function Navbar(){
//   return (
//     <nav className="nav">
//       <a href="/Dashboard:username">Dashboard</a>
//       <ul>
//         <li>
//           <a href="/Table">Data Table</a>
//         </li>
//         <li>
//           <a href="/Chart">Chart</a>
//         </li>
//       </ul>
//     </nav>
//   )
// }

function Navbar({user}) {
  
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      {/* <a href="#" className="nav__brand">
        Expense
      </a> */}
      <ul className={active}>
        {/* <li className="nav__item">
          <a href="/Dashboard/:username" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li> */}
        <li className="nav__item">
          <a href={'/Table/'+user} className="nav__link">
            Table
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}


function Dashboard() {
  const { username } = useParams();
  return (
    <div className="dashboard-container">
      {/* <h1>Dashboard</h1> */}

      <div className="image-upload-container">
      <ImageUpload user={username}/>
      </div>

      <Navbar user={username}/>

      {/* <div>
        <GetData user={username}/>
      </div> */}

    </div>
  );
}

export default Dashboard;
