import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Hello from "./hello";
import Hello2 from "./hello2";
import Login from "./login";
import Register from "./register";


class Routes extends Component {
    render() {
        return (
            <Router>
                <div className="state">

                    <Switch>
                        <Route path="/" exact component={Hello} />
                        <Route path="/hello2" exact component={Hello2} />
                        <Route path="/Login" exact component={Login} />
                        <Route path="/Register" exact component={Register} />
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default Routes;

