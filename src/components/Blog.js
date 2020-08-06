import React, { Component } from 'react';
import Story from './Story';
import '../styles/blog.css'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      stories: []
    }
  };

  componentDidMount() {
    fetch('https://tipsy-taxi.herokuapp.com/blog', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(stories => this.setState({ stories }))
      .then(console.log('here'))
      .catch(err => console.log(err));
 }
   
  
  render() {
    const { stories } = this.state;

      return (
        <div >
          <Story stories={ stories }/>  
        </div>
        )
  }

}

export default Blog;