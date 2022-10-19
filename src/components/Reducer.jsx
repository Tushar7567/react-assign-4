import React from 'react'
import Students from './Students';
import Ads from './Ads';
import Edit from './Edit';

const Reducer = (state='',action) => {
  switch(action){
    case Ads : return <Ads />
    case Edit : return <Edit />
    default : return <Students />
  }
}

export default Reducer
