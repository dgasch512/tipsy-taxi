import React from 'react';
import List from './List';
import '../../styles/driver.css';

const Driver = ({ rides }) => {
  const ridesComponent = rides.map((rider, i) => {
    return (
      <div className='cover2'>
        <div>
          <List 
          key={i}
          id={rider.id} 
          firstname={rider.firstname} 
          lastname={rider.lastname} 
          phone={rider.phone} 
          pickupLocation={rider.pickupLocation}
          dropoffLocation={rider.dropoffLocation}
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