import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./SideBar.css";
const SideBar = ({addNote}) => {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false)
  return (
    <>
      <div className="sidebar">
        <AiFillPlusCircle  onClick={() => setListOpen(!listOpen)}/>
        <ul className={`sidebar_list ${listOpen ? "sidebar_list_active": ""}`}>
          {color.map((item, index) => (
            <li
              className="sidebar_list_item"
              key={index}
              style={{ backgroundColor: item }} onClick={() => addNote(item)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
