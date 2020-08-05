import React, { Component } from 'react';
// import Ordered from './Ordered';
import '../../styles/request.css';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: {
      name: "",
      email: "",
      password: ""
      }

    }
  };
 
  loadDriver = (data) => {
    this.setState({driver: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    })
  }

  componentDidMount() {
    this._isMounted = true;
  }


  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  };
  
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  };


  onSubmitRequest = () => {
    fetch('http://localhost:4000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(driver => {
      if (driver && this._isMounted) {
        this.loadDriver(driver)        
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
                Register Driver
              </legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="name"
                >
                  Name
                </label>
              <input
                className="pa2 input-reset ba  hover-bg-black hover-white w-70"
                type="text"
                name="name"
                id="name"
                onChange={this.onNameChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="email"
                >
                  Email Address
                </label>
              <input
                
                className="pa2 input-reset ba hover-bg-black hover-white w-70"
                type="text"
                name="email"
                id="email"
                onChange={this.onEmailChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="password"
                >
                  Password
                </label>
              <input
                className="pa2 input-reset ba hover-bg-black hover-white w-50"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
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
                  <Link className='order' to="/admin">Submit</Link>
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

export default Register;