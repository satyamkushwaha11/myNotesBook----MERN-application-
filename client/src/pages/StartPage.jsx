import React ,{ useState } from 'react';


import Login from '../components/login/Login';
import Signup from '../components/signup/Signup'

function StartPage() {
    const [ss,setForm]=useState(true)
    const onsubmit=(e)=>{
        // e.preventDefault();
        return setForm(!ss)
    }
    return (
        <>
            
            <nav className="navbar navbar-light bg-dark">
                <h1 className='bg-dark align-self-center'>WELCOME TO iNOTEBOOK</h1>
                
            </nav>
            {ss? <Login />: <Signup  />}
           


        </>
    )
}

export default StartPage;
