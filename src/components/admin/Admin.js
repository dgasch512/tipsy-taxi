import React from 'react';


const Admin = () => {
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

      </div>
          {/* // Cards for other pages or resources */}

    </div>
  )
}

export default Admin;