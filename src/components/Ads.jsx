import React from 'react';
import {Link} from 'react-router-dom'

const Ads = (props) => {
    
    const add = () => {
        const updatedSArr = [...props.sArr];
          let currentArr = updatedSArr[props.sArr.length];
          currentArr = {name: props.name, age: props.age, course: props.course, batch: props.batch }
          updatedSArr[props.sArr.length] = currentArr;
          props.setsArr(updatedSArr);
    }
    return (
        <>
            <div className='edit-container'>
                <div className='edit-row'>
                    <input type="text" autoComplete='true' placeholder='Name' onChange={(e) => props.setName(e.target.value)} />
                    <input type="number" autoComplete='true' placeholder='Age' onChange={(e) => props.setAge(e.target.value)} />
                </div>
                <div className='edit-row'>
                    <input type="text" autoComplete='true' placeholder='Course' onChange={(e) => props.setCourse(e.target.value)} />
                    <input type="text" autoComplete='true' placeholder='Batch' onChange={(e) => props.setBatch(e.target.value)} />
                </div>
            </div>
            <Link to='/students'><button className='btn-pos'  >Cancel</button></Link>
            <Link to='/students'><button className='btn-pos' onClick={add} >Add</button></Link>

        </>
     );
}

export default Ads