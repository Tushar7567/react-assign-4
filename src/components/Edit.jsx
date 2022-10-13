import React from 'react';
import { useNavigate} from 'react-router-dom';

const  Edit = (props) => {
  // const result =[];

  // for(let i = 0; i<props.sArr.length; i++) {
  //   if(props.in === props.sArr[i])
  //   {result.push( <div >
  //     <div className='edit-container'>
  //       <div className='edit-row'>
  //         <input type="text" autoComplete='true' placeholder='Name' defaultValue={item.name} onChange={(e) =>props.handleUpdateName(e,i)} />
  //         <input type="number" autoComplete='true' placeholder='Age' defaultValue={item.age} onChange={(e) => props.handleUpdateAge(e, index)} />
  //       </div>
  //       <div className='edit-row'>
  //         <input type="text" autoComplete='true' placeholder='Course' defaultValue={item.course} onChange={(e) => props.handleUpdateCourse(e, i)} />
  //         <input type="text" autoComplete='true' placeholder='Batch' defaultValue={item.batch} onChange={(e) => props.handleUpdateBatch(e, i)} />
  //       </div>
  //     </div>
  //     <button className='btn-pos' onClick={()=>{navigate('/students')}}  >Cancel</button>
  //     <button className='btn-pos' onClick={()=>{navigate('/students')}} >Update</button>

  //   </div>)}
  // }
  const num = props.i;
  console.log(props.i);

  const navigate = useNavigate();  
    return (
      <div>
        {
          props.sArr.slice(num,num+1).map((item, index) => {
            return <div key={`${index}`}>
              <div className='edit-container'>
                <div className='edit-row'>
                  <input type="text" autoComplete='true' placeholder='Name' defaultValue={item.name} onChange={(e) =>props.handleUpdateName(e,num)} />
                  <input type="number" autoComplete='true' placeholder='Age' defaultValue={item.age} onChange={(e) => props.handleUpdateAge(e, num)} />
                </div>
                <div className='edit-row'>
                  <input type="text" autoComplete='true' placeholder='Course' defaultValue={item.course} onChange={(e) => props.handleUpdateCourse(e, num)} />
                  <input type="text" autoComplete='true' placeholder='Batch' defaultValue={item.batch} onChange={(e) => props.handleUpdateBatch(e, num)} />
                </div>
              </div>
              <button className='btn-pos' onClick={()=>{navigate('/students')}}  >Cancel</button>
              <button className='btn-pos' onClick={()=>{navigate('/students')}} >Update</button>

            </div>
          })
        }
      </div>
    )
  }

export default Edit;


// {
//   props.sArr.map((item, index) => {
//     return <div key={`${index}`}>
//       <div className='edit-container'>
//         <div className='edit-row'>
//           <input type="text" autoComplete='true' placeholder='Name' defaultValue={item.name} onChange={(e) =>props.handleUpdateName(e,index)} />
//           <input type="number" autoComplete='true' placeholder='Age' defaultValue={item.age} onChange={(e) => props.handleUpdateAge(e, index)} />
//         </div>
//         <div className='edit-row'>
//           <input type="text" autoComplete='true' placeholder='Course' defaultValue={item.course} onChange={(e) => props.handleUpdateCourse(e, index)} />
//           <input type="text" autoComplete='true' placeholder='Batch' defaultValue={item.batch} onChange={(e) => props.handleUpdateBatch(e, index)} />
//         </div>
//       </div>
//       <button className='btn-pos' onClick={()=>{navigate('/students')}}  >Cancel</button>
//       <button className='btn-pos' onClick={()=>{navigate('/students')}} >Update</button>

//     </div>
//   })
// }
