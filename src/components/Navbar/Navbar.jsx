import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Idul Fitri</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-item nav-link" to="/">Home</Link>
                                <Link className="nav-item nav-link" to="/features">Features</Link>
                                <Link className="nav-item nav-link" to="/pricing">Pricing</Link>
                                <Link className="nav-item nav-link text-white btn btn-success" to="/">Sign Up</Link>
                            </div>
                        </div>
                    </nav>
                </div>
        )
    }
}
