import { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import SideBar from './Components/SideBar/SideBar';

function App() {
  const getNotes = JSON.parse(localStorage.getItem("notes-app"))
  const [notes, setNotes] = useState(getNotes || [])

  const addNote = (color) => {
   const tempNotes = [...notes]
   tempNotes.push({
    id: new Date().getDay() + " "+Math.floor(Math.random() * 50),
    text:"", 
    time: Date.now(),
    color:color
   })
   setNotes(tempNotes)
  }
  const deleteNote = (del) => {
    const tempNotes = [...notes]
  const newNotes = tempNotes.filter((item) => item.id !== del)
  setNotes(newNotes)
  }
   useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes))
   }, [notes])
  return (
    <div className='App'>
      <SideBar addNote={addNote}/>
    <NoteContainer notes={notes} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
