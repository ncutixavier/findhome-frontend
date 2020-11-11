import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Login from '../components/login/Login'

class Index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        )
    }
}

export default Index
