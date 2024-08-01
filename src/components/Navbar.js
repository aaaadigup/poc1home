import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 text-green-100" style={{ background: "#2e2e38" }}>
      <ul className="flex items-center justify-between h-full px-10">
        <Link to="/">
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1lg3ir_p2lehN-9kXc97sdgjQCB4QLMhQRI9gq09sgTzTZoGB8yyXjYawGbGl5hfgQc&usqp=CAU"
              className="h-20 w-38 px-0"
            />
          </li>
        </Link>
        <Link to="/workcontainer">
          <li>Login </li>
        </Link>
        <Link to="/liveportal">
          <li> About us </li>
        </Link>
        <li> Contact</li>
      </ul>
    </nav>
  );
}
