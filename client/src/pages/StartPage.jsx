import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


import Login from '../components/login/Login';
import Signup from '../components/signup/Signup'

function StartPage() {
    const [form, setForm] = useState(true)

    if (localStorage.getItem("Token")){
        return <Redirect     to='/home' /> 
    }
    
    const changeForm = (e) => {
        return setForm(!form)
    }

    console.log(localStorage);


    return (
        <>

            <nav className="navbar navbar-light bg-dark">
                <h3 className='d-flex bg-transparent text-light text-50'>WELCOME TO iNOTEBOOK</h3>
                <div className='d-flex gap-4 my-2 mx-3'>
                    <button type="button" class="btn btn-primary    signupOrLoginBtnChange"   onClick={changeForm}>signup</button>
                    <button type="button" class="btn btn-primary    signupOrLoginBtnChange"   onClick={changeForm}>Login</button>
                </div>

            </nav>
            {form ? <Login /> : <Signup />}



        </>
    )
}

export default StartPage;
