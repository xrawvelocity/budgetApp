import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <Link to="/" className="nav-logo">
                </Link>
                <div className="nav-links">
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Sign Up</Link>
                </div>
            </nav>
        )
    }
}
