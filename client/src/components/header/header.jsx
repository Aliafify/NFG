import React from "react";
import "./header.css";
import { MdLogin } from "react-icons/md";
import { FcMenu, FcOvertime } from "react-icons/fc";
function Header({ logo, className, onClickMenu, signup, login }) {
  return (
    <>
      <header>
        <span className="header-menu-btn header-span" role="button" onClick={onClickMenu}>
          {/* <FcMenu size="30px"  style={{ marginRight: "5px" }} /> */}
          <span style={{ marginRight: "0.5rem" }} class="material-symbols-outlined">menu</span>
          <span className="header-text">Menu</span>
        </span>

        <img src={logo} alt="NFG-logo" className="logo" />
        <span className="header-span-signup header-span" onClick={() => signup()}>
          {/* <FcOvertime color='green' size="30px" style={{ marginRight: "5px" }} /> */}
          <span style={{ marginRight: "0.5rem" }} class="material-symbols-outlined">event</span>
          <span className="header-text">Appointment</span>
        </span>
        <span className="header-span-login header-span" onClick={() => login()}>
          {/* <MdLogin size="30px" style={{ marginRight: "5px" }} /> */}
          <span style={{ marginRight: "0.5rem" }}  class="material-symbols-outlined">Login</span>
          <span className="header-text">Login</span>
        </span>
      </header>
    </>
  );
}

export default Header;
