import React ,{useState}from 'react'
import "./signup.css"

function Signup() {
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
    
      const postData=async(e)=>{
        e.preventDefault();
        // const {name,email,password}=data;
        const res=await fetch("/user/addUser",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
          
        )
        console.log(res);
    
        // axios.post("/user/addUser",{name,email,password}).then((data)=>{
        //   alert('seccussfully added')
        //   console.log(data);
        // }).catch((err)=>{
        //   console.log(err);
        // })
    
        
    
     
        // const res=await axios.post("/user/addUser",{
        //   headers:{
        //     "Content-Type":"application/json"
        //   },
        //   body:{name,email,password}
        //   // JSON.stringify({
        //   //   name,email,password
        //   // })
        // })
        
        // console.log(res,"rr");
        // const rres=await res.json()
        // console.log(rres);
        // alert(res)
    
      }
    
      
    
      return (
        <div className='main_container'>
          <h1>Signup </h1>
          <form >
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={changeData} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={changeData} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password"onChange={changeData}/>
            </div>
            <div>
              
              <input type="submit" name="submit" onSubmit={postData}/>
            </div>
          </form>
        </div>
      );
    
}

export default Signup
