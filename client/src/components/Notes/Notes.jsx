import React, { useState, useContext, useEffect, useRef } from 'react';
import './note.css'

import NoteContext from '../../context/notes/noteContext';
import NotesItem from './NotesItem';




function Notes() {
    const context = useContext(NoteContext)
    const { notes, getAllNotes,editNote } = context
    useEffect(() => {
        getAllNotes()
    }, [])

    const ref = useRef(null)
    const refClose=useRef(null)

    const UpdateNote = (currentnote) => {
        ref.current.click();
        setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})    

    }

    // ----edit note form------------


    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        refClose.current.click();

        editNote(note.id,note.etitle, note.edescription, note.etag)

    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        
    }

    // -------------------


    return (
        <>
            {/* for editing the note */}
            <div>
                {/* Button trigger modal */}
                <button type="button" ref={ref} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" hidden>
                    Edit Modal
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"> Edit Modal</h5>
                                <button type="button" className="close btn  btn-secondary " data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className='d-flex flex-column gap-3 align-items-center'>
                                    <div className="  form-group  w-75 ">
                                        <label htmlFor="exampleInputEmail1 ">Title</label>
                                        <input type="text" className="form-control" placeholder="Enter Note Title " required value={note.etitle} name='etitle' onChange={onchange} />
                                    </div>
                                    <div className="d-flex flex-column form-group w-75 ">
                                        <label htmlFor="exampleInputPassword1">Description</label>
                                        <textarea className='form-control' name='edescription' onChange={onchange} required value={note.edescription}></textarea>
                                    </div>
                                    <div className=' d-flex gap-3 align-items-center w-75 ' >
                                        <label>Tag: </label >
                                        <div className='d-md-flex flex-md-row gap-md-3'>
                                            <div className="tag"><input type="radio" onChange={onchange} checked={note.etag==="General"?true:false} name='etag'  value="General"/> General</div>
                                            <div className="tag"><input type="radio" onChange={onchange} checked={note.etag==="Favoraite"?true:false} name='etag' value="Favoraite" /> Favoraite</div>
                                            <div className="tag"><input type="radio" onChange={onchange} checked={note.etag==="Mark"?true:false} name='etag'  value="Mark" /> Mark</div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length<3 || note.edescription.length<1} type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------------------*/}

            {/* --------allnotes ----------------------- */}
            <div className=' w-75 mx-auto  AllNotes'>
                {notes.length===0 && 'No note to display'}
                {notes.map((n, i) => {
                    return <NotesItem key={i} UpdateNote={UpdateNote} Note={n} />
                })}
            </div>


        </>
    )

}
export default Notes;
