import {NavLink} from "react-router-dom";
import ButDarkMode from "../buttonDarMode/ButDarkMode";

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

                   <ButDarkMode/>

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