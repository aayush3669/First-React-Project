
import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div classname='text'>
                <h2>Register below</h2>
                <form>

                    <p>
                    <input
                        name='name'
                        placeholder="Name"
                    />
                    </p>
                    <p>
                    <input
                        name='emailID'
                        placeholder='EmailID'

                    />
                    </p>
                    <p>
                    <input
                        type='phoneno'
                        placeholder="PhoneNo"
                    />
                    </p>
                    <p>
                    <input
                        type='Username'
                        placeholder="Username"
                    />
                    </p>
                    <p>
                    <input
                        type='Password'
                        placeholder="Password"
                    />
                    </p>
                </form>
                <a href='/'><button>Register</button></a>

            </div>



        )
    }


}

export default Register;