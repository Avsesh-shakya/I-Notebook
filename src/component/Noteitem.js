import React, { useContext } from 'react'
import notesContext from "../context/notes/NoteContext"


const Noteitem = (props) => {

    const context = useContext(notesContext);
    const { deleteNote } = context;
    const { note ,updatenote} = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body mb-3">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title"> {note.title}</h5>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
                        <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                    </div>
                    <p className="card-text">  {note.description}</p>
                    <p className="card-text">  {note.tag}</p>

                </div>
            </div>

        </div>
    )
}

export default Noteitem
