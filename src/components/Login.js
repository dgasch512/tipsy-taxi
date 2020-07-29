import React, { Component } from 'react';
import {
  Paper,
  TextField,
  Button,
  Container
} from '@material-ui/core';
import '../styles/login.css';


class Login extends Component {
  state = {
    username: '',
    password: ''
  }


  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=380*1000";
    window.location.replace("/driver")
    this.props.newUser( this.state.username )
  //  this.props.history.push("/listings")
  }

  render() {
    return (
      <div className="app" >
        <Paper elevation={3} className="loginPap">
          <h2>Admin Login</h2>
          <p>If you're looking for a ride, go back!</p>
          <Container className="loginCont">
            <form className="login-form" onSubmit={this.login}>
              <div className="form-input">
              <TextField
                marginRight=""
                required
                variant="filled"
                onChange={this.handleTextChange}
                value={this.state.username}
                name="username"
                label="Username"
                type="text" />
                </div>
                <br />
                <div className='form-input'>
                  <TextField
                  required
                  variant="filled"
                  onChange={this.handleTextChange}
                  value={this.state.password}
                  name="password"
                  label="Password"
                  type="password" />
                </div>
                <br />
              <Button
                type="submit"
                className="login-button"
                variant="contained">Login</Button>
            </form>
        </Container>
          
        </Paper>
      </div>
    );
  }
}

export default Login;




