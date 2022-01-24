import React, { useContext, useState } from 'react'
import "./AddNotes.css"
import NoteContext from '../../../context/notes/noteContext'


function AddNote() {
    const [btn, setBtn] = useState(true)
    const context = useContext(NoteContext);
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        setBtn(true)

        console.log(note.title, note.description, note.tag);

        addNote(note.title, note.description, note.tag)


    }

    const onchange = (e) => {
        // console.log({[e.target.name]:e.target.value});
        setNote({ ...note, [e.target.name]: e.target.value })


    }

    return (
        <>
            <div className='addNoteContainer mx-5 my-3 p-3 rounded w-75 mx-auto'>
                {btn ?
                    <>
                        <button type="button" className="btn btn-dark btn-lg" onClick={() => { setBtn(false) }}>Add Note</button>
                    </>

                    :
                    <form className='d-flex flex-column gap-3 align-items-center'>
                        <div className="  form-group  w-50 ">
                            <label htmlFor="exampleInputEmail1 ">Title</label>
                            <input type="text" className="form-control" placeholder="Enter Note Title  " required name='title' onChange={onchange} />
                        </div>
                        <div className="d-flex flex-column form-group w-50 ">
                            <label htmlFor="exampleInputPassword1">Description</label>
                            <textarea className='form-control' name='description' required onChange={onchange}></textarea>
                        </div>
                        <div className=' d-flex gap-3 align-items-center w-50 ' >
                            <label>Tag: </label >
                            <div className='d-md-flex flex-md-row gap-md-3'>
                                <div className="tag"><input type="radio" onChange={onchange} name='tag' value="General" /> General</div>
                                <div className="tag"><input type="radio" onChange={onchange} name='tag' value="Favoraite" /> Favoraite</div>
                                <div className="tag"><input type="radio" onChange={onchange} name='tag' value="Mark" /> Mark</div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-25 " onClick={handleClick}>ADD</button>
                    </form>
                }

            </div>
        </>
    )
}

export default AddNote;
