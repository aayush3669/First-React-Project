import React, { Component } from "react";
import { Button } from 'react-bootstrap'


class Login extends Component {
    render() {
        return (
            <div classname='hello'>
                <img src={Logo} alt='Logo'></img>
                <a href='/register'><Button onSubmit variant="primary">Login</Button></a>

            </div>
            

        )
}
}
