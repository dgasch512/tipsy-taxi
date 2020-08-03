import React, { Component } from 'react';
// import Ordered from './Ordered';
import '../styles/request.css';
import { Link } from 'react-router-dom';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ride: {
      firstname: "",
      lastname: "",
      phone: "",
      pickuplocation: "",
      dropofflocation: "",
      comments: "" 
      }

    }
  };
 
  loadRide = (data) => {
    this.setState({ride: {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        pickuplocation: data.pickuplocation,
        dropofflocation: data.dropofflocation,
        comments: data.comments,
        rideTime: data.rideTime
      }
    })
  }

  componentDidMount() {
    this._isMounted = true;
  }


  onFirstNameChange = (event) => {
    this.setState({ firstname: event.target.value })
  };

  onLastNameChange = (event) => {
    this.setState({ lastname: event.target.value })
  };
  
  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value })
  };

  onPLChange = (event) => {
    this.setState({ pickuplocation: event.target.value })
  };

  onDLChange = (event) => {
    this.setState({ dropofflocation: event.target.value })
  };

  onCommentsChange = (event) => {
    this.setState({ comments: event.target.value })
  };

  onSubmitRequest = () => {
    fetch('http://localhost:4000/request', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        pickuplocation: this.state.pickuplocation,
        dropofflocation: this.state.dropofflocation,
        comments: this.state.comments
      })
    })
    .then(response => response.json())
    .then(ride => {
      if (ride && this._isMounted) {
        this.loadRide(ride)
        
      }
    })

  };

  componentWillUnmount() {
    this._isMounted = false;
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
                onChange={this.onFirstNameChange}
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
                onChange={this.onLastNameChange}
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
                onChange={this.onPhoneChange}
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
                onChange={this.onPLChange}
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
                onChange={this.onDLChange}
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
                onChange={this.onCommentsChange}
                required
              />
              </div>
            </fieldset>
            <div className="">
              <button
                className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
                type="submit"
                // value="Request"
                onClick={this.onSubmitRequest}
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
