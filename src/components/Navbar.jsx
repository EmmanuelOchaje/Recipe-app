/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  faHome,
  faUser,
  faList,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];
  function closeSidebar() {
    setSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          T<span>ess</span> Kitchen
        </a>
        <div className="nav-links">
          {links.map((lnk) => (
            <a href="#!" key={lnk.name}>
              {lnk.name}
            </a>
          ))}
          {/* <a href="#!" className="active">
            Home
          </a>
          <a href="#!">Recipe</a>
          <a href="#!">Settings</a> */}
        </div>
        <div
          className={sidebar ? "sidebar-btn active" : "sidebar-btn"}
          onClick={() => setSidebar(!sidebar)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {sidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
