import React from 'react';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);           
    }

    const navigateProps = (path) => {
        history.push({
            path: path,
            search: '?online=true',
            state:{
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ () => navigate('/profile') }>
                Go to Profile
            </button>
            <button onClick={ () => navigate('/online-state') }>
                Go to Page with State
            </button>
        </div>
    );
}

export default Homepage;
