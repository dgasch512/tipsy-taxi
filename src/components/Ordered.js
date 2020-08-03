import React from 'react';
import '../styles/ordered.css';

const Ordered = () => {
  return (
     <div className='outside'>
        <div className='article br2 ba b--black-10 mv5 w-300 w-100-m w-50-1 shadow-5 mw7 center'>
          <h4>We have received your request. A driver will be in touch shortly to confirm and update you on ride status.</h4>
          <h4 className='yellow'>Thank you for helping us keep the roads safe!</h4>
          <button className='adminButton'>Track Driver</button>
        </div>
    </div> 
  )

}

export default Ordered;