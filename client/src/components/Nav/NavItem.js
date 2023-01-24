import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function NavItem({ data }) {
  const [classNames, setClassNames] = useState("");
  const bgColor = (e) => {
    const taps = document.querySelectorAll(".navlink");
    taps.forEach((t) => t.classList.remove("scolor"));
    const classList = e.target.classList;
    //  classList.toggle("scolor")
  };
  return (
    <>
      <NavLink
        style={({ isActive }) => ({
          background: isActive ? "#ffb400 " : "",
          opacity: isActive ? 1 : "",
        })}
        data-content={data.name}
        className={"navlink "}
        to={data.to}
      >
        {data.path}
      </NavLink>
    </>
  );
}

export default NavItem;
