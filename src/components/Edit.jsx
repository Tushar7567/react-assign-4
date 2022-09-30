import React from 'react';
import {Link} from 'react-router-dom'

const  Edit = (props) => {

  
    return (
      <div>
        {
          props.sArr.map((item, index) => {
            return <div key={`${index}`}>
              <div className='edit-container'>
                <div className='edit-row'>
                  <input type="text" autoComplete='true' placeholder='Name' defaultValue={item.name} onChange={(e) =>props.handleUpdateName(e,index)} />
                  <input type="number" autoComplete='true' placeholder='Age' defaultValue={item.age} onChange={(e) => props.handleUpdateAge(e, index)} />
                </div>
                <div className='edit-row'>
                  <input type="text" autoComplete='true' placeholder='Course' defaultValue={item.course} onChange={(e) => props.handleUpdateCourse(e, index)} />
                  <input type="text" autoComplete='true' placeholder='Batch' defaultValue={item.batch} onChange={(e) => props.handleUpdateBatch(e, index)} />
                </div>
              </div>
              <Link to='/students'><button className='btn-pos'  >Cancel</button></Link>
              <Link to='/students'><button className='btn-pos'  >Update</button></Link>
    
            </div>
          })
        }
      </div>
    )
  }

export default Edit;



