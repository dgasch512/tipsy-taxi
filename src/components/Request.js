import React, { Component } from 'react';

class Request extends React {
  constructor(props) {
    super(props);
    this.state = {
      isBusiness = false
    }
  };
  

  Render () {
    return (
      isBusiness ?! (
        <div className='outside'>
          <div>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
                Phone Number:
                <input type="text" name="number" />
                Pickup Address or Loacation:
                <input type="text" name="pickup" />
                Dropoff Address or Location:
                <input type="text" name="dropoff" />
                Number of riders:
                <input type="text" name="dropoff" />
                Comments:
                <input type="text" name="dropoff" />
              </label>
              <input type="submit" value="Submit" />
            </form>          
          </div>
          <div>
            <p>If you are uncomfortable providing any of the answers above or wish to make special arrangements please call or text your driver when they reach out. Your safety is our main concern</p>
          </div>
        </div>
      ) : (
        <div className='outside'>
          <div>
            <form>
              <label>
                Business Name:
                <input type="text" name="name" />
                Business Number:
                <input type="text" name="name" />
                Rider Name:
                <input type="text" name="name" />
                Rider phone number:
                <input type="text" name="number" />
                Pickup Address or Loacation:
                <input type="text" name="pickup" />
                Dropoff Address or Location:
                <input type="text" name="dropoff" />
                Comments:
                <input type="text" name="dropoff" />
              </label>
              <input type="submit" value="Submit" />
            </form>          
          </div>
          <div>
            <p>If you are unable to provide any of the answers above or wish to make special arrangements please call or text the driver. Thank you for taking part in keeping our roads safe!</p>
          </div>
        </div>   
      )
    )
  }
}