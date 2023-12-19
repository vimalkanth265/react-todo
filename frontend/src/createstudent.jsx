import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router';

const Createstudent = () => {
  const[name,setname]=useState("")
  const[email, setemail]=useState("")
  const[mob_no, setmob_no]=useState("")
  const navigate=useNavigate();

  function handleSubmit(event){
      event.preventDefault();
      axios.post("http://localhost:8081/create",{name,email,mob_no})
      .then(res=>{
        console.log(res);
        navigate('/');
      }).catch(err=>console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      
      <div className='w-50 bg-white rounded p-3 '>
        
        <form onSubmit={handleSubmit}>
            <h2>Add student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter name' className='form-control'
                onChange={e=>setname(e.target.value)} />
                
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' className='form-control' 
                onChange={e=>setemail(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Mob_NO</label>
                <input type="number" placeholder='Enter Mob_no' className='form-control' 
                onChange={e=>setmob_no(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>

      </div>
      
    </div>
  )
}

export default Createstudent;
