import React from 'react';
import '../../styles/list.css';


const List = ({ id, firstname, lastname, phone, pickuplocation, dropofflocation, comments }) => {

  return (
    // Return only one thing
    <div className='all'> 
      <div className='box'>
        <div className='line1'>
          <h2>{id}. {firstname} {lastname}</h2>
          <p className='phoneNum'>{phone}</p>
        </div> 
        <div className='line2'>
          <div>
            <p className='location'>{dropofflocation} (Map)</p>
            <p className='location'>{pickuplocation} (Map)</p>
          </div>
          <div className='comments'>
            <p className='boldComm'>Comments</p>
            <div className='commentText'>{comments}</div>
          </div>
        </div>
      </div> 

     
      
    </div>
  )
};

export default List;