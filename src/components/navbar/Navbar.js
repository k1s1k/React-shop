import sun from "../footer/img/icons/sun.svg";
import moon from "../footer/img/icons/moon.svg";
import {NavLink} from "react-router-dom";

import "./style.css"

function Navbar() {

    const activlink = "nav-list__link nav-list__link--active"
    const normal = "nav-list__link"

   return (
       <nav className="nav">
           <div className="container">
               <div className="nav-row">
                   <NavLink to="/" className="logo">
                       <strong>Freelancer</strong> portfolio
                   </NavLink>

                   <button className="dark-mode-btn">
                       <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                       <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                   </button>

                   <ul className="nav-list">
                       <li className="nav-list__item">
                           <NavLink   className={({isActive})=>isActive ? activlink : normal} to="/">

                               Home
                           </NavLink>
                       </li>

                       <li className="nav-list__item">
                           <NavLink to="/projects" className={({isActive})=>isActive ? activlink : normal}>
                               Projects
                           </NavLink>
                       </li>
                       <li className="nav-list__item">
                           <NavLink  className={({isActive})=>isActive ? activlink : normal} to="/contacts">
                               Contacts
                           </NavLink>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
   )
}

export default Navbar;