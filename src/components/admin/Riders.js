import React from 'react';
import List from './List';

const Riders = ({ rides }) => {
  const rideComponent = rides.map((user, i) => {
    return (
      <div className='cover'>
          <List 
          key={i} 
          id={rides[i].id} 
          firstname={rides[i].firstname} 
          lastname={rides[i].lastname} 
          phone={rides[i].phone} 
          pickupLocation={rides[i].pickupLocation}
          dropoffLocation={rides[i].dropoffLocation}
          comments={rides[i].comments}
          />
      </div>

    )
  })
    return (
      <div>
        { rideComponent }  
      </div>
    
      )
}

export default Riders;