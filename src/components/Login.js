import React from 'react'
import "./Login.css"
import { loginURL  } from './spotify'
const Login = () => {
    return (
        <React.Fragment>
        <div className="login">
            {/*Spotify logo */}
            {/*Login with spotify button */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="spotify"
            />

            <a href={loginURL}>Login With Spotify</a>

        </div>
        </React.Fragment>
    )
}

export default Login
