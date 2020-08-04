import React from 'react';
import List from './List';
import '../../styles/driver.css';

const Driver = ({ rides }) => {

  const ridesComponent = rides.map((rider, i) => {
    return (
      <div key={rider.id} className='cover2'>
        <div>
          <List 
          id={rider[i].id} 
          firstname={rider[i].firstname} 
          lastname={rider[i].lastname} 
          phone={rider[i].phone} 
          pickuplocation={rider[i].pickuplocation}
          dropofflocation={rider[i].dropofflocation}
          comments={rider[i].comments}
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