import React from 'react'
import NavButton from "../styled-components/navButton";
import LangSwitcher from "./languageSwitcher"
function MainMenu({lang}) {
    const main = [
        { name: "home", path: "home", icon: "" },
        { name: "about", path: "about", icon: "" },
        { name: "contact", path: "contact", icon: "" },
        { name: "store", path: "store", icon: "" },
      ];
  return (
<>
<nav className="main-menu">
        <ul>
        <h5>Main Pages</h5>
          {main.map((item, index) => 
            <li key={index}>
              <NavButton
                name={item.name}
                to={item.path}
                className="main-menu-item"
                width="100%"
                activeColor="green"
                nonActiveColor="#fff"
              />
            </li>
          )}
        </ul>
        <div className="lang-cont">
       {lang&&<LangSwitcher/>}
   
        </div>
      </nav>
</>
    )
}

export default MainMenu