import React, {Component } from 'react';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  };
  
  buttonText = () => {
    return this.state.isActive ? 'Stop Driving' : 'Start Driving';
  }

  render () {
    return (
      <div className='outside'>
        <div className='article br2 ba b--black-10 mv5 w-300 w-100-m w-50-1 shadow-5 mw7 center'>
          <h4>Welcome to the show</h4>
          <p>You've had 20 rides this week!</p>

      <button>{this.buttonText}</button>
        </div>
        <div className='nab'>

        </div>
      </div>
    )
  }
}

export default Admin;