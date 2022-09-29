import React, { Component } from 'react';
import Details from './Details';

export default class Students extends Component {
  constructor(){
      super();
      this.state = {
          sArr:[{name:'John', age:'24', course:'MERN', batch:'October'},
          {name:'Doe', age:'25', course:'MERN', batch:'November'},
          {name:'Zelensky', age:'41', course:'MERN', batch:'December'},
          {name:'Putin', age:'58', course:'MERN', batch:'May'},
          {name:'Biden', age:'69', course:'MERN', batch:'April'}],
          name:'',
          age:'',
          course: '',
          batch: ''

      }
  }
  addNewStudent = () =>{
      // console.log('Add new student button cicked');
      const updatedSArr = [...this.state.sArr];
      updatedSArr.push({name: this.state.name, age: this.state.age, course: this.state.course, batch: this.state.batch})
      this.setState({sArr: updatedSArr});
  }
  render() {
    return (
      <div>
        <div className='student-heading'>
        <h1>Students Details</h1>
        <button className='btn-addstudent' onClick={this.addNewStudent} >Add new student</button>
        </div>
        <Details />
        
      </div>
    );
  }
}
