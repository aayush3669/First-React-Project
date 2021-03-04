
import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div classname='text'>
                <h2>Register below</h2>
                <form>

                    <input
                        name='name'
                        placeholder="Name"
                    />
                    <input
                        name='emailID'
                        placeholder='EmailID'

                    />
                    <input
                        name='phoneno'
                        placeholder="PhoneNo"
                    />
                    <input
                        name='Username'
                        placeholder="Username"
                    />
                    <input
                        name='Password'
                        placeholder="Password"
                    />
                </form>
                <a href='/'><button>Register</button></a>

            </div>



        )
    }


}

export default Register;