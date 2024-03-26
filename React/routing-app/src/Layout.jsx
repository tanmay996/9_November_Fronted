import React from 'react';
import {Outlet , Link} from "react-router-dom"

export default function Layout() {
  return (
    <div>
     {/* <h1> This is Layout section</h1>*/}
     <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Service">Service</Link></li>
        </ul>
     </nav>
     <Outlet />
    </div>
  )
}
