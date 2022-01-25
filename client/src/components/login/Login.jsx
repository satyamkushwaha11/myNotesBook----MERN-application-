import React ,{useState}from 'react'
import axios from "axios"
import "../signup/signup.css"

function Login(props) {
    console.log(props);
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
      })
    
      const changeData=(e)=>{
          console.log(data);
        var Name=e.target.name;
        var value=e.target.value;
        setData({...data,[Name]:value})
      }

      
    
      return (
        <div className='main_container'>
          <h1>Login </h1>
          <form onSubmit={''}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={changeData} required  placeholder='Enter Your Email'/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" onChange={changeData} required  placeholder='Create a Password'/>
            </div>
            <div className='d-flex'>
              <input type="submit" name="submit" />
              <button  type="button" class="btn btn-primary    signupOrLoginBtnChange">signup</button>

            </div>
          </form>
        </div>
      );

}

export default Login
