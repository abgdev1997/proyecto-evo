import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Homepage = () => {

    const location = useLocation();
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);           
    }

    const goBack = () => {
        history.goBack();           
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ () => navigate('/profile') }>
                Go to Profile
            </button>
            <button onClick={ () => goBack() }>
                Go Back
            </button>
        </div>
    );
}

export default Homepage;
