import React, {Component } from 'react';
import Driver from './Driver';
import '../../styles/admin.css';
import { Link } from 'react-router-dom';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      rides: []
    }
  };

  componentDidMount() {
    fetch('http://localhost:4000/admin', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(rides => this.setState({ rides }));
  }

  render () {
    return (
      <div className='outside2'>
        <div className='driverInfo br2 ba b--black-10 w-300 w-100-m w-50-1 shadow-5'>
          <div className='head1'>
             Welcome to the show - Driver Portal
          </div>
           
          <div className='main1'>
            <p className='rideTot'>You've given 20 rides! This week: 2</p>
            <div className='buttons' >
              <button className='adminButton isActive'>STOP DRIVING</button> 
              <button 
                className='adminButton manageBlog'
                type='submit'>
                <Link className='order' to="/artpost">MANAGE BLOG</Link>
                </button>  
              <button className='adminButton registerButton'>REGISTER ADMIN
              </button>  
            </div>
                    
          </div>

        </div>
        <div className='nab'>
          <Driver rides={ this.state.rides } />
        </div>
      </div>
    )
  }
}

export default Admin;