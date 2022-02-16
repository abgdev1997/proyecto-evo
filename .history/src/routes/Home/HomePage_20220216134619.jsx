import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Homepage = () => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);           
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ () => navigate('/profile') }>
                Go to Profile
            </button>
        </div>
    );
}

export default Homepage;
