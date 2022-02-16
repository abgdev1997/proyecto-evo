import React from 'react';
import { useHistory } from 'react-router-dom';

const Profilepage = ({ user }) => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path)
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigate('/tasks') }>
                Tasks
            </button>
            <button onClick={ () => goBack() }>
                Go Back
            </button>
        </div>
    );
}

export default Profilepage;
