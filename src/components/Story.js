import React from 'react';
import StoryList from './StoryList';
import '../styles/story.css';

const Story = ({ stories }) => {

  
    const storyComponent = stories.map((story, i) => {
      return (
        <div key={story.id} className='cover2'>
          <div>
            <StoryList 
              id={story.id} 
              name={story.name} 
              image={story.image} 
              article={story.article}
            />
          </div>
        </div>
  
      )
    })
  return (
    <div>
    { storyComponent }  
  </div>
  )
};

export default Story;