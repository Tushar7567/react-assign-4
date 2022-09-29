import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    return (
      <div>
        <div className='edit-container'>
            <div className='edit-row'>
                <input type="text" autoComplete='true' placeholder='Name'/>
                <input type="number" autoComplete='true' placeholder='Age'/>
            </div>
            <div className='edit-row'>
                <input type="text" autoComplete='true' placeholder='Course'/>
                <input type="text" autoComplete='true' placeholder='Batch'/>
            </div>
        </div>
      <button className='btn-pos'>Cancel</button>
      <button className='btn-pos'>Update</button>

      </div>
    )
  }
}
