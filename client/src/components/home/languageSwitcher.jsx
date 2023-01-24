import React,{useState} from 'react'
import { MdLanguage } from "react-icons/md";

function LangSwitcher() {
    const language = [{ name: "EN" }, { name: "AR" }];
    const [show, setShow] = useState(false);
  return (
    <>
      <div className="lang-cont-com">
          <button
            className="lang-switch"
            onClick={() => {
              setShow(!show);
            }}
          >
            <MdLanguage
              size="0.975rem"
              style={{ verticalAlign: "text-bottom", marginRight: "5px" }}
            />
            <span>language</span>
          </button>
          {show ? (
            <div className="lang-choices">
              <ul>
                {language.map((l, i) => 
                  <li key={i}>{l.name}</li>
                )}
              </ul>
            </div>
          ) : null}
        </div>
    </>
  )
}

export default LangSwitcher