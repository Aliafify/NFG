import React, { useState } from "react";
import SideModal from "../sideModal/sideModal.js";
import NavButton from "../styled-components/navButton";
import "./sideNave.css";
import { MdLanguage } from "react-icons/md";
import MainMenu from "./mainMenu";
function SideNave({ open, onClose, logo }) {
  const main = [
    { name: "home", path: "home", icon: "" },
    { name: "about", path: "about", icon: "" },
    { name: "contact", path: "contact", icon: "" },
    { name: "store", path: "store", icon: "" },
  ];
  const language = [{ name: "EN" }, { name: "AR" }];
  const [show, setShow] = useState(false);
  return (
    <SideModal
      open={open}
      onClose={onClose}
      width="50vw"
      height="100vh"
      icon={logo}
    >
    
     <MainMenu lang={true}/>
    </SideModal>
  );
}

export default SideNave;
