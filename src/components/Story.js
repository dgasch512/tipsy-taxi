import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '../styles/story.css';

const Story = ({ id, name, image, article }) => {

  return (
    // Return only one thing
    <div className='cover'>   
      <Paper elevation={3} className='paper'>
        <article className='article'>
          <Grid container spacing={3} center className='artGrid'>
            <Grid item xs={12} className='headline'>
              <h1>{name}</h1>  
            </Grid>
            <Grid item xs={12} sm={6}>
              <img className='blogPic' alt="this is a pic" src={image} />
            </Grid>
            <Grid item xs={12} sm={6} className='story'>
              <p>{article}</p>
            </Grid>
          </Grid> 
          
          
          {/* <div className='blogWords'>
            
          </div> */}
        </article>
      </Paper>
    </div>
  )
};

export default Story;