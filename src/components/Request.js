import React, { Component } from 'react';
// import Ordered from './Ordered';
import '../styles/request.css';
import { Link } from 'react-router-dom';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstname: "",
      lastname: "",
      phone: "",
      pickupLocation: "",
      dropoffLocation: "",
      comments: "",
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
    console.log('New Request Submitted')
  }


  
  render() {
    return (
      <div className='addContent'>
        <div className="addDiv">
        <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 shadow-5 mw7 center'>
        <main className="pa4 black-80 w-50">
          <div className="measure">
            <fieldset
              id="sign_up"
              className="ba b--transparent ph0 mh0"
            >
              <legend className="f1 fw6 ph0 mh0 title">
                Rider Details
              </legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="firstname"
                >
                  First Name
                </label>
              <input
                className="pa2 input-reset ba  hover-bg-black hover-white w-70"
                type="text"
                name="firstname"
                id="firstname"
                value={this.state.firstname}
                onChange={this.handleTextChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
              <input
                
                className="pa2 input-reset ba hover-bg-black hover-white w-70"
                type="text"
                name="lastname"
                id="lastname"
                value={this.state.lastname}
                onChange={this.handleTextChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
              <input
                className="pa2 input-reset ba hover-bg-black hover-white w-50"
                type="text"
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={this.handleTextChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="pickupLocation"
                >
                  Pickup Location
                </label>
              <input
                className="pa2 input-reset ba hover-bg-black hover-white w-100"
                type="text"
                name="pickupLocation"
                id="pickupLocation"
                value={this.state.pickupLocation}
                onChange={this.handleTextChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="dropoffLocation"
                >
                  Dropoff Location
                </label>
              <input
                className="pa2 input-reset ba hover-bg-black hover-white w-100 mb3"
                type="text"
                name="dropoffLocation"
                id="dropoffLocation"
                value={this.state.dropoffLocation}
                onChange={this.handleTextChange}
                required
              />
              </div>
              <div>
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="comments"
                >
                  Comments
                </label>
              <input
                className="pa2 input-reset ba hover-bg-black hover-white w-100 mb2"
                type="text"
                name="comments"
                id="comments"
                value={this.state.comments}
                onChange={this.handleTextChange}
                required
              />
              </div>
            </fieldset>
            <div className="">
              <button
                className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
                type="submit"
                // value="Request"
                onClick={this.handleSubmit}
                >
                  <Link className='order' to="/submitted">Submit</Link>
                </button>
            </div>
          </div>
        </main>
        </article>
        </div>
      </div> 

    );
  }
}

export default Request;
