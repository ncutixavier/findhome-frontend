import React, { Component } from 'react'
// import './Home.css'
import Navbar from './MainNavbar'
import FrontPage from './FrontPage'

export class Home extends Component {
    render() {
        return (
            <div className="header" name="home">
                <Navbar/>
                <FrontPage/>
                {/* <h1 className="header__title">find-home-app</h1>
                <div class="loading">
                    <div class="loader"></div>
                </div> */}
            </div>
        )
    }
}

export default Home
