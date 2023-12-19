import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Student = () => {
  const [student, setstudent]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:8081/")
    .then(res => setstudent(res.data))
    .catch(err => console.log(err));
  },[])

const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8081/student/"+id)
      window.location.reload();
    }catch(err){
      console.log(err);
    }
  }

  return (
  
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      
      <div className='w-50 bg-white rounded p-3 '>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mob No</th>
            <th>Action</th>
            </tr>
            
          </thead>
          <tbody>
            {
              student.map((data, i)=>(
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.mobile_no}</td>
                  <td>
                    <Link to={`update/${data.ID}`} className='btn btn-primary mx-3'>Update</Link>
                    <button className='btn btn-danger' onClick={e=>handleDelete(data.ID)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>

      </div>
      
    </div>
  )
}

export default Student;
