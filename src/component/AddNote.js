import React, { useContext, useState } from 'react'
import notesContext from "../context/notes/NoteContext"


const AddNote = () => {
    

    const context =useContext(notesContext);
    const {addNote}=context;

    const [note,setNote]=useState({title:""  ,description:"" ,tag:""})

    const handleclick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:""  ,description:"" ,tag:""})
   
       


    }
    const onchange=(e)=>{
        setNote ({...note,[e.target.name]:e.target.value})
    
       

    }
  return (
      <div className='container my-3'>
                <h1>Add Notes</h1>
                <form >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title"name='title' aria-describedby="emailHelp" value={note.title} onChange={onchange}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description}  onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange} />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
                </form>
            </div>

  )
}

export default AddNote
