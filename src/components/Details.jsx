import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Edit from './Edit';

export default class Details extends Component {
    studentList = this.state.sArr.map(
        (item,index) => {
        return(
             <div key={`stu${index}`} className="row">
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div>{item.course}</div>
                <div>{item.batch}</div>
                <div><Link to={`/desc/${index}`} i={index}>Edit</Link></div>
            </div> 
        )
        }
    )
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div>Name</div>
          <div>Age</div>
          <div>Course</div>
          <div>Batch</div>
          <div>Change</div>
        </div>
        {this.studentList}
        {/* {this.state.sArr.forEach((item,index) => {
            <div className="row">
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div>{item.course}</div>
                <div>{item.batch}</div>
                <div><Link to={`/desc/${index}`} i={index}>Edit</Link></div>
            </div> 
        })} */}
        {/* <div className="row">
          <div>John</div>
          <div>26</div>
          <div>MERN</div>
          <div>October</div>
          <div><Link to='/desc'>Edit</Link></div>
        </div> */}
        {/* <div className="row">
          <div>Doe</div>
          <div>25</div>
          <div>MERN</div>
          <div>November</div>
          <div><Link  to='/desc'>Edit</Link></div>
        </div>
        <div className="row">
          <div>Zelensky</div>
          <div>41</div>
          <div>MERN</div>
          <div>December</div>
          <div><Link  to='/desc'>Edit</Link></div>
        </div>
        <div className="row">
          <div>Putin</div>
          <div>54</div>
          <div>MERN</div>
          <div>May</div>
          <div><Link  to='/desc'>Edit</Link></div>
        </div>
        <div className="row">
          <div>Biden</div>
          <div>69</div>
          <div>MERN</div>
          <div>April</div>
          <div><Link  to='/desc'>Edit</Link></div>
        </div> */}
      </div>
    )
  }
}
