import React from 'react';
import axios from 'axios';
import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)



//------------------- Get All notes---------------------------------
  const getAllNotes = async () => {

    // /////////////////-----with fatch-----////////////////////////
    // const resp = await fetch(`${host}/notes/getAllNotes`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
    //   }
    // }
    // );
    // const allnotes = await resp.json()
    

    // const resp=await axios({
    //   url: `${host}/notes/getAllNotes`,
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
    //   }
    // })
    //////////////////////////////////////////////////////////////////////



    ////////////////-----with axios-----//////////////////////////////
    const resp=await axios.get(`${host}/notes/getAllNotes`,{
      headers: {
        'Content-Type': 'application/json',
        'jwtToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
      }
    })
    //////////////////////////////////////////////////////////////////////

    const allnotes = await resp.data
    setNotes(notes.concat(allnotes.Notes))
  }




// ------------------------Add A Note------------------------------

  const addNote = async (title, description, tag) => {
    console.log(title, description, tag);


    // /////////////////-----with fatch-----////////////////////////
    // const resp = await fetch(`${host}/notes/addNote`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
    //   },

    //   body: JSON.stringify({ title, description, tag: tag ? tag : "General" })
    // }
    // );

    //   setNotes(notes.concat(await resp.json()))

    // ///////////////////////////////////////////////////////////////
       

    /////////////////-----with axios-----//////////////////////////////
    const resp = await axios.post(`${host}/notes/addNote`,{ title, description, tag: tag ? tag : "General" },{
      headers: {
        'Content-Type': 'application/json',
        'jwtToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
      },
    }
    )
   console.log(await resp.data,'daf');

    setNotes(notes.concat(await resp.data))
  //////////////////////////////////////////////////////////////////////


    //  (!resp?
    //     alert('you leave somethinge'):alert('added successfully'))
  }



//------------------Edit A Note-----------------------


  const editNote = async (id, title, description, tag) => {

    // /////////////////-----with fatch-----////////////////////////
    // const resp = await fetch(`${host}/notes/updateNote/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
    //   },
    //   body: JSON.stringify({ title, description, tag })
    // }
    // );
    // const jsonRes = await resp.json()
    // console.log(jsonRes);
    //////////////////////////////////////////////////////////////////////

    ////////////////-----with axios-----//////////////////////////////
    const resp = await axios.put(`${host}/notes/updateNote/${id}`,{ title, description, tag }, {
      headers: {
        'Content-Type': 'application/json',
        'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
      },
      body: JSON.stringify({ title, description, tag })
    }
    );
     console.log(resp);
    //////////////////////////////////////////////////////////////////////


    const new_Notes = JSON.parse(JSON.stringify(notes))

    for (let i = 0; i < new_Notes.length; i++) {
      const element = new_Notes[i];

      if (element._id === id) {
        new_Notes[i].title = title;
        new_Notes[i].description = description;
        new_Notes[i].tag = tag
        break
      }

    }
    setNotes(new_Notes)
  }


  // ----------------Delete A Note---------------

  const deleteNote = async (id) => {

    // /////////////////-----with fatch-----////////////////////////
    // const resp = await fetch(`${host}/notes/deleteNote/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
    //   },
    // }
    // );
    // console.log(await resp.json());
    // const newnotes = notes.filter((note) => { return note._id !== id })
    // setNotes(newnotes)
    //////////////////////////////////////////////////////////////////////

    ////////////////-----with axios-----//////////////////////////////
    const resp = await axios.delete(`${host}/notes/deleteNote/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'jwttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThlZmMwMGY3NDI1ZWMwYjliZTk1NiIsImlhdCI6MTY0MjY1NTg0N30.cRdiui1icgS6Iu445RwBtyFiIUnusJtvdG0CXU0NECI'
      }
    }
    );
    console.log(resp);
    //////////////////////////////////////////////////////////////////////
    
    const newnotes = notes.filter((note) => { return note._id !== id })
    setNotes(newnotes)

  }


  return (
    <NoteContext.Provider value={{ notes, getAllNotes, editNote, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState