import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();

    // THis is for Redirect to the initial page after login
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h1>LogIn Here</h1>
            <div>=======================</div>
            {/* <button onClick={googleSignIn}>Google Login</button> */}

            {/* THis is for Redirect to the initial page after login */}
            <button onClick={handleGoogleLogIn}>Google Login</button>
        </div>
    );
};

export default Login;