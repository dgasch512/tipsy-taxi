import React, { Component } from 'react';
import List from './List';

class Driver extends React {
  constructor(props) {
    super(props);
    this.state = {
      isActive = false
    }
  };
  

  Render () {
    return (
        <div className='outside'>
          <div>
            <h1>Assigned Riders</h1>
            <h4>Driver Name</h4>
            <h4>Date</h4>
            <h4>Total:    Active:     Completed:</h4>
            <button>Start Driving</button>
          </div>
          <div>
            <List />
          </div>
        </div>   
    )
  }
}

export default Driver;