import React from 'react';
import { useHistory } from 'react-router-dom';

const Notfoundpage = () => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path)
    }

    return (
        <div>
            <h4>Not Found</h4>
            <button onClick={ () => navigate('/') }>
                Go Home
            </button>
        </div>
    );
}

export default Notfoundpage;
