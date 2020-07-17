import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-logo">
                    <Link to="/">
                        <img src="./images/pennykeepfull.png" alt="logo" className="nav-logo-img" />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                </div>
            </nav>
        )
    }
}
