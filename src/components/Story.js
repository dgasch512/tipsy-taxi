import React from 'react';
import '../styles/story.css';

const Story = ({ id, name, image, article }) => {

  return (
    // Return only one thing
    <div>   
      <div className='paper'>
        <article className='article2 shadow-5'>
          <div className='artGrid'>
            <div className='pieces'>
              <div className='headline'>
                <h2>{name}</h2> 
              </div> 
              <div className='imgDiv shadow-5'>
                <img className='blogPic' alt="this is a pic" src={image} />
              </div>
            </div>
            <div className='story'>
              <p>{article}</p>
            </div>
          </div> 
        </article>
      </div>
    </div>
  )
};

export default Story;