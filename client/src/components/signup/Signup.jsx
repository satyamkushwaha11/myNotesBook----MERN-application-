import React ,{useState}from 'react'
import axios from "axios"
import "./signup.css"

function Signup(props) {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
      })
    
      const changeData=(e)=>{
        var Name=e.target.name;
        var value=e.target.value;
        setData({...data,[Name]:value})
      }
   
    
      return (
        <div className='main_container'>
          <h1>Signup </h1>
          <form onSubmit={''}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={changeData} required   placeholder='Enter Your Name'/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={changeData} required  placeholder='Enter Your Email'/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password"onChange={changeData} required  placeholder='Create a Password'/>
            </div>
            <div className='d-flex ' >
              <input type="submit" name="submit" />
              <button  type="button" class="btn btn-primary    signupOrLoginBtnChange">Login</button>
            </div>
          </form>
        </div>
      );
    
}

export default Signup
