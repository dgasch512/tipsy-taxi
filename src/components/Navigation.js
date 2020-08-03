import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import checkAuth from '../checkAuth';
import '../styles/navigation.css';


class Navigation extends Component  {
    state = {
        user: this.props.user,
        loggedIn: this.props.loggedIn
    }


    render() {
        return (
          <nav className='nav' style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
            {/* <p className='f3 link dim black underline pa3 pointer'>Sign Out</p> */}
            <div className='icon'>
             <h4 style={{ flexGrow: "1" }}>TIPSY<span className='taxi'>TAXI</span></h4> 
            </div>
            <div>
            <ul className="nav-list">
                        <li className="nav-list-item">
                          <Link className='links' to="/">HOME</Link>
                        </li>
                        <li className="nav-list-item">
                          <Link className='links' to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-list-item">
                          <Link className='links' to="/blog">BLOG</Link>
                        </li>
                        {checkAuth() && (
                        <li className="nav-list-item">
                          <Link className='links' to="/admin">ADMIN</Link>
                        </li> 
                        )}
                        
                        {checkAuth() ? (
                            <li className="nav-list-item links"
                              onClick={() => {
                              document.cookie = "loggedIn="
                              window.location.replace("/")
                              this.props.logOut()
                            }}>
                            LOGOUT
                        </li>
                    ) : (
                        <li className="nav-list-item">
                        <Link className='links' to="/login">ADMIN</Link>
                    </li>
                    )}

                    </ul>
            </div>
          </nav>

           
        )
    }
}

export default Navigation
