import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css"
const NoteContainer = ({notes,deleteNote}) => {
  return (
    <>
    <div className="note-container">
        <h2>Your Note</h2>
        <div className="note-container_notes custom-scroll">

            {notes.length > 0 ? 
notes.map((item) => <Note key={item.id} note={item} deleteNote={deleteNote}/>) : <h2>No Notes Present</h2>
            }

        </div>
    </div>
    </>
  )
}

export default NoteContainer
