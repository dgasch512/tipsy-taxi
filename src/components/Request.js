import React, { Component } from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusiness: false,
      id: "",
      firstname: "",
      lastname: "",
      phone: "",
      pickupLocation: "",
      dropoffLocation: "",
      comments: "",
      isShowing: true
    }
  };

  handleTextChange = (event) => {
    const rider = { ...this.state };
    rider[event.target.id] = event.target.value;
    this.setState(rider);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newRider = this.state;
    newRider.id = this.props.rides.length;
    this.props.newRequest(newRider);
    this.setState({ isShowing: true });
    window.alert("Ride request submitted. Thank you for choosing to call a designated driver!");
  }
  
  render() {
    return (
      <container className='addContent'>
      <div className="addDiv">
        <form onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '40%'}}>
          <TextField 
            id='firstname'
            placeholder='First Name'
            value={this.state.firstname}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='lastname'
            placeholder='Last Name'
            value={this.state.lastname}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='phone'
            placeholder='Phone Number'
            value={this.state.phone}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='pickupLocation'
            placeholder='Pickup Location'
            value={this.state.pickupLocation}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='dropoffLocation'
            placeholder='Drop-off Location'
            value={this.state.dropoffLocation}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='comments'
            placeholder='Please add any comments you have about this request'
            value={this.state.comments}
            onChange={this.handleTextChange}
             /> 
          <br />
          <Button 
            variant='contained' 
            color='primary'
            type='submit'
            >SUBMIT</Button>
        </form>
      </div>
    </container> 
    )
  }
}

export default Request;
//   Render () {
//     return (
//       isBusiness ?! (
//         <div className='outside'>
//           <div>
//             <form>
//               <label>
//                 Name:
//                 <input type="text" name="name" />
//                 Phone Number:
//                 <input type="text" name="number" />
//                 Pickup Address or Loacation:
//                 <input type="text" name="pickup" />
//                 Dropoff Address or Location:
//                 <input type="text" name="dropoff" />
//                 Number of riders:
//                 <input type="text" name="dropoff" />
//                 Comments:
//                 <input type="text" name="dropoff" />
//               </label>
//               <input type="submit" value="Submit" />
//             </form>          
//           </div>
//           <div>
//             <p>If you are uncomfortable providing any of the answers above or wish to make special arrangements please call or text your driver when they reach out. Your safety is our main concern</p>
//           </div>
//         </div>
//       ) : (
//         <div className='outside'>
//           <div>
//             <form>
//               <label>
//                 Business Name:
//                 <input type="text" name="name" />
//                 Business Number:
//                 <input type="text" name="name" />
//                 Rider Name:
//                 <input type="text" name="name" />
//                 Rider phone number:
//                 <input type="text" name="number" />
//                 Pickup Address or Loacation:
//                 <input type="text" name="pickup" />
//                 Dropoff Address or Location:
//                 <input type="text" name="dropoff" />
//                 Comments:
//                 <input type="text" name="dropoff" />
//               </label>
//               <input type="submit" value="Submit" />
//             </form>          
//           </div>
//           <div>
//             <p>If you are unable to provide any of the answers above or wish to make special arrangements please call or text the driver. Thank you for taking part in keeping our roads safe!</p>
//           </div>
//         </div>   
//       )
//     )
//   }
// 