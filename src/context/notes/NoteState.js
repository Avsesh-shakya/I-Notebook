import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"


  const getAllNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {

        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MmYzNTFkYWFmMzgwZTc4ZGM0ZTIxIn0sImlhdCI6MTczMzQ4OTQ4OX0.GNj9T-nWkRBU_uhi6f94Mv-62dtkN5R2TrT5IVifD4g'
      },
    });
    const json = await response.json()

    setNotes(json)
  }

  const [notes, setNotes] = useState([getAllNotes])

  // Add a Note
  const addNote = async (title, description, tag) => {
    // todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MmYzNTFkYWFmMzgwZTc4ZGM0ZTIxIn0sImlhdCI6MTczMzQ4OTQ4OX0.GNj9T-nWkRBU_uhi6f94Mv-62dtkN5R2TrT5IVifD4g'
      },
      body: JSON.stringify({ title, description, tag })
    });
  
    const note = await response.json();
    setNotes(notes.concat(note))

  }

  // Delete a Note
  const deleteNote = async (id) => {
    // // todo api call
    // console.log(id)
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MmYzNTFkYWFmMzgwZTc4ZGM0ZTIxIn0sImlhdCI6MTczMzQ4OTQ4OX0.GNj9T-nWkRBU_uhi6f94Mv-62dtkN5R2TrT5IVifD4g'
      },

    });
    const json = await response.json();
 
    console.log("Delete" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MmYzNTFkYWFmMzgwZTc4ZGM0ZTIxIn0sImlhdCI6MTczMzQ4OTQ4OX0.GNj9T-nWkRBU_uhi6f94Mv-62dtkN5R2TrT5IVifD4g'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)


    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        console.log(id)
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

      setNotes(newNotes)
    }
  }



  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState 