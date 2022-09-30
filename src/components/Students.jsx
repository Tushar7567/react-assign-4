import React from 'react';
import {  Link } from 'react-router-dom';


const  Students = (props) =>{
 
  const studentList = () =>{ return props.sArr.map(
    (item,index) => {
    return(
         <div key={`${index}`} className="row">
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.course}</div>
            <div>{item.batch}</div>
            <div><Link to={`/desc/${index}`}>Edit</Link></div>
        </div> 
    )
    }
  )}
  
    return (
      <div> {console.log(props.sArr)}
        <div className='student-heading'>
        <h1>Students Details</h1>
        <Link to='/addnew'> <button className='btn-addstudent'  >Add new student</button></Link>
       
        </div>
        <div className='container'>
          <div className="row">
            <div>Name</div>
            <div>Age</div>
            <div>Course</div>
            <div>Batch</div>
            <div>Change</div>
          </div>
          {studentList()}
      </div>
        
      </div>
    );
 
}

export default Students;