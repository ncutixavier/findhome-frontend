import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage'
import Login from '../components/login/Login'

class Index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={Login} />
            </Switch>
        )
    }
}

export default Index