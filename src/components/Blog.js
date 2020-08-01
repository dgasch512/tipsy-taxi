import React from 'react';
import Story from './Story';
import '../styles/blog.css'

const Blog = ({ stories }) => {
  const storyComponent = stories.map((user, i) => {
    return (
      <div className='cover'>
        <Story 
        key={i} 
        id={stories[i].id} 
        name={stories[i].name} 
        image={stories[i].image} 
        article={stories[i].article}
      />  
      </div>

    )
  })
    return (
      <div>
        { storyComponent }  
      </div>
    
      )
}

export default Blog;