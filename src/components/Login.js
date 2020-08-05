import React, { Component } from 'react';
import {
  Paper,
  TextField,
  Button
} from '@material-ui/core';
import '../styles/login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
      user: {
        id: '',
        name: '',
        email: '',
        ridesTot: '',
        registered: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        ridesTot: data.ridesTot,
        registered: data.registered
      }
    })
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  };

  onSubmitSignIn = () => {
    fetch('http://https://tipsy-taxi.herokuapp.com/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(driver => {
        if (driver.id) {
          // event.preventDefault()
          this.loadUser(driver)
          this.props.profile(driver)
          document.cookie = "loggedIn=true;max-age=1000*1000";
          window.location.replace("/admin")
          console.log(driver)
        }
      })
  }

  render() {
    return (
      <div className="app" >
        <Paper elevation={3} className="loginPap">

          <div className="loginCont">
            <div className='words'>
              <h2 className='adminLogin'>Admin Login</h2>
              <p className='noRider'>If you're looking for a ride, go back!</p>             
            </div>

            <div className="login-form">
              <div className="form-input">
              <TextField
                required
                variant="filled"
                onChange={this.onEmailChange}
                name="username"
                label="Username"
                type="text" />
                </div>
                <br />
                <div className='form-input'>
                  <TextField
                  required
                  variant="filled"
                  onChange={this.onPasswordChange}
                  name="password"
                  label="Password"
                  type="password" />
                </div>
                <br />
              <Button
                type="submit"
                className="login-button"
                variant="contained"
                onClick={this.onSubmitSignIn}
                >Login</Button>
            </div>
        </div>
          
        </Paper>
      </div>
    );
  }
}

export default Login;




