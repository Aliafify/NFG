import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DropDownSelect({ name, options, onSelect, maxSelection, index }) {
  //console.log(onSelect)
  const [choosed, setChoosed] = useState([]);
  const [text, setText] = useState(null);
  const onChange = (ev) => {
    if (choosed.length < maxSelection) {
      setChoosed([...choosed, ev]);
    } else {
      const newChoosed = choosed.filter((ev, i) => i > 0);
      setChoosed([...newChoosed, ev]);
      onSelect({ name: "days", value: [...newChoosed, ev] }, index);
      // console.log(Tt);
    }
    const Tt = options.filter((o, i) => choosed.some(el=>el==i)).join(' ,');
    setText(Tt);
  };
  useEffect(()=>{
    setText(null)
  },[maxSelection])
  return (
    <>
      <div><span>{text}</span></div>
      <select name={name} onChange={(event) => onChange(event.target.value)}>
        {options.map((o, i) => (
          <Option key={i} index={i} value={o} />
        ))}
      </select>
    </>
  );
}
function Option({ index, value }) {
  return (
    <>
      <option className="drop-down-option" value={index} id={index}>
        {value}
      </option>
    </>
  );
}
export default DropDownSelect;
