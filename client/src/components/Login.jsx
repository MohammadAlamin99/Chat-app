import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form text-center">
                        <h1>Sign Up</h1>
                            <input type="text" placeholder='Email' /> <br />
                            <input type="text" placeholder='First Name' /> <br />
                            <input type="text" placeholder='Last Name' /> <br />
                            <input type="text" placeholder='Password' /><br />
                            <button className='w-50 btn btn-success'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;