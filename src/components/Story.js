import React from 'react';

const Story = ({ id, name, image, article }) => {

  return (
    // Return only one thing
    <article className='mw5 mw6-ns center pt4'>
      <h1 className='f2'>{id}. {name}</h1>
      <img className='w-100 f5 measure' alt="this is a pic" src={image} />
      <div className=''>
        <p className='measure 1h-copy'>{article}</p>
      </div>
    </article>
  )
};

export default Story;