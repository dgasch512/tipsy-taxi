import React from 'react';
// import Card from './Card';
// import axios from 'axios';
import taxi from '../images/taxi.png';
import '../styles/dashboard.css';
import { Link } from 'react-router-dom';

// const test = () => {
//   axios.get('/test').then(res => console.log(res))
// }

const Dashboard = () => {
  console.log('working')
  return (
    
    <div className='outside'>
      <div className='artBack br2 ba b--black-10 mv5 w-300 w-100-m w-50-1 shadow-5 center'>
        <article className='br2 ba b--black-10 w-300 w-100-m w-50-1 shadow-5 article3'>
          <div>
            <h2 className='thish2'>Designate <span className='yellow'>us</span> your driver.</h2>
          </div>
                {/* Request section. May be a component later */}
                {/* If isRequested is false, button, if true, message or map */}
          <div>
            <p className='thisP center mw7'>Don't worry - Tipsy Taxi is a free service. We don't ask for your payment information or any personal information not necessary to provide you a safe way home. Let's make the roads safer together!</p> 
          </div> 
          <div className='request'>
            {/* <p className='callText'>PHONE 575-964-0000</p> */}
            {/* <h5>OR</h5> */}
            <button className='reqButton shadow-6 '>
              <Link className='button-text' to="/request">GET A RIDE</Link>
              <img className='taxi-icon' style={{paddingTop: '5px'}} alt='logo' src={taxi}/>
            </button>
          </div>
          
        </article>
      </div>
    </div>
  )
}

export default Dashboard;