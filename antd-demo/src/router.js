import React, { Component } from 'react'
import App from './App'
import HOME from './page/HOME'
import StudentAdd from './page/studentAdd'
import {BrowserRouter as Router, Route } from 'react-router-dom'

export default class router extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path="/home" component={HOME}></Route>
                        <Route path="/student/add" component={StudentAdd}></Route>
                    </App>
                </Router>
            </div>
        )
    }
}
