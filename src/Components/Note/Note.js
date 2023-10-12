import React from 'react'
import "./Note.css"
import { BsFillTrashFill } from "react-icons/bs";
const Note = ({note, deleteNote}) => {

    const formData = (value) => {
        if(!value)  return "";

        const date = new Date(value)
        const monthnames = ['jan','feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']

        let hrs = date.getHours()
        let amPm = hrs > 12 ? "PM": "AM";
        hrs = hrs ? hrs : 12;
        hrs = hrs > 12 ? (hrs= 24 - hrs): hrs


        let day = date.getDate()
        let getMin = date.getMinutes()
        getMin = getMin < 10 ? "0" + getMin : getMin

        const month = monthnames[date.getMonth()]

        return `${hrs}: ${getMin} ${amPm} ${day} ${month}`
    }
  return (
    <>
      <div className="note" style={{backgroundColor:note.color}}>
        <textarea className='note_text' defaultValue={note.text}></textarea>
        <div className='two-icon'>
        <p>{formData(note.time)}</p>
        <BsFillTrashFill onClick={() => deleteNote(note.id)}/>
        </div>
      </div>
    </>
  )
}

export default Note
