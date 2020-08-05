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
    fetch('http://https://tipsy-taxi.herokuapp.com/blog', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(console.log('here'))
      .then(data => this.setState({ data }));
 }
   
  
  render() {
    const { stories } = this.state;
    const storyComponent = stories.map((story, i) => {
      return (
        <div key={story.id} >
          <Story 
          id={stories[i].id} 
          name={stories[i].name} 
          image={stories[i].image} 
          article={stories[i].article}
        />  
        </div>
  
      )
    })
      return (
        <div className='app1'>
          { storyComponent }  
        </div>
      
        )
  }

}

export default Blog;