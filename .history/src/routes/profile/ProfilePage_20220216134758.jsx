import React from 'react';
import { useHistory } from 'react-router-dom';

const Profilepage = ({ user }) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => goBack() }>
                Go Back
            </button>
        </div>
    );
}

export default Profilepage;
