import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const signIn = () => {
        // do clever google login shizz..
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1280px-Discord_logo.svg.png"
                    alt=""
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>

    );
}

export default Login
