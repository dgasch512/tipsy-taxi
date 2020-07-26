import React from 'react';
import Story from './Story';


const Blog = ({ stories }) => {
  const storyComponent = stories.map((user, i) => {
    return (
      <Story 
        key={i} 
        id={stories[i].id} 
        name={stories[i].name} 
        image={stories[i].image} 
        article={stories[i].article}
      />
    )
  })
    return (
      <div>
        { storyComponent }  
      </div>
    
      )
}

export default Blog;