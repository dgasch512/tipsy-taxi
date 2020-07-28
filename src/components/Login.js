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
      <div className="App" >
        <Paper elevation={3} className="loginPap">
          <h1>Helloooo</h1>
          <h3>This is a page</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellat autem! Corporis quod quam, blanditiis fugit voluptatibus atque earum beatae non consequuntur magnam sit ducimus, at a tenetur, ratione voluptate?</p>
          <Container className="loginCont">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              className='form-input'
              variant="filled"
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              className='form-input'
              variant="filled"
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
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




