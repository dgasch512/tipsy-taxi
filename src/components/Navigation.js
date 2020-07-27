import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import checkAuth from '../checkAuth';


class Navigation extends Component  {
    state = {
        user: this.props.user,
        loggedIn: this.props.loggedIn
    }


    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Tipsy Taxi
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="nav-list-item">
                          <Link to="/about">About</Link>
                        </li>
                        <li className="nav-list-item">
                          <Link to="/blog">Blog</Link>
                        </li>
                        {checkAuth() && (
                        <li className="nav-list-item">
                          <Link to="/driver">Driver Portal</Link>
                        </li> 
                        )}
                        {checkAuth() && (
                        <li className="nav-list-item">
                          <Link to="/admin">Admin</Link>
                        </li> 
                        )}
                        
                        {checkAuth() ? (
                            <li className="nav-list-item"
                              onClick={() => {
                              document.cookie = "loggedIn="
                              window.location.replace("/login")
                              this.props.logOut()
                            }}>
                            Logout
                        </li>
                    ) : (
                        <li className="nav-list-item">
                        <Link to="/login">Admin</Link>
                    </li>
                    )}

                    </ul>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navigation