import React, { Component } from 'react'
import Home from '../components/home/Home'
import Houses from '../components/home/Houses'
import Footer from '../components/footer/Footer'
import About from '../components/home/About'

export class LandingPage extends Component {
    render() {
        return (
            <div className="home">
                <Home />
                <About />
                <Houses />
                <Footer />
            </div>
        )
    }
}

export default LandingPage
