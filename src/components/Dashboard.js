import React from 'react';
import Card from './Card';
import axios from 'axios';

const test = () => {
  axios.get('/test').then(res => console.log(res))
}

const Dashboard = () => {
  console.log('working')
  return (
    <div className='outside'>
      <div>
        <h2>Request a ride!</h2>
      </div>
            {/* Request section. May be a component later */}
            {/* If isRequested is false, button, if true, message or map */}
      <div>
        <button>Get a Ride</button>
        <p>Don't worry - Tipsy Taxi is a free service. We don't ask for your payment information or any personal information not necessary to provide you a safe way home. Let's make the roads safer together!</p>
        <p>Call or text (575)964-0000</p>
        <button onClick={test}>Test Server</button>
      </div>
          {/* // Cards for other pages or resources */}
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Dashboard;