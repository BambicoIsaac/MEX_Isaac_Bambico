import React, { useState } from 'react'
import './LoginForm.css';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


    return (
        <div className="wholepage">
            <form className="login-form" onSubmit={submitHandler}>
                <div className="login-form-inner">
                    <h2>Login</h2>
                    {(error !== "") ? 
                    (<div className="error">{error}</div>) : ""}
                    <div className="login-form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" id="username" 
                        onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" 
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm