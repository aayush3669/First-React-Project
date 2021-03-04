import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./login.js";
import Register from "./register.js";

class Routing extends Component {
    render() {
        return (
            <Router>
                <div className="state">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default Routing;

