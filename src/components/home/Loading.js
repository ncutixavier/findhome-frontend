import React, { Component } from 'react'
import FrontPage from './FrontPage'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1 className="header__title">find-home-app</h1>
                <div class="loading">
                    <div class="loader"></div>
                </div>
            </div>
        )
    }
}

export default Home
