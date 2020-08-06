import React from 'react';
import List from './List';
import '../../styles/driver.css';

const Driver = ({ rides }) => {

  const ridesComponent = rides.map((rider, i) => {
    return (
      <div key={rider.id} className='cover2'>
        <div>
          <List 
          id={rider.id} 
          firstname={rider.firstname} 
          lastname={rider.lastname} 
          phone={rider.phone} 
          pickuplocation={rider.pickuplocation}
          dropofflocation={rider.dropofflocation}
          comments={rider.comments}
          />
        </div>
      </div>

    )
  })
    return (
      <div>
        { ridesComponent }  
      </div>
    
      )
}


export default Driver;