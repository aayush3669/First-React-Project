import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./login.js";
import Register from "./register.js";
import Home from "./home";
import Contact from "./contact";
import Product from "./product.js";
import Whatsnew from "./whatsnew.js";
import About from "./about.js";



class Routing extends Component {
    render() {
        return (
            <Router>
                <div className="state">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/product" component={Product} />
                        <Route exact path="/whatsnew" component={Whatsnew} />
                        <Route exact path="/about" component={About} />


                    </Switch>
                    
                </div>
            </Router>

        )
    }
}

export default Routing;

