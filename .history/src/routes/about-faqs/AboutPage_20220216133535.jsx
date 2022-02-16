import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

const Aboutpage = () => {

    const location = useLocation();
    const history = useHistory();

    console.log("'We are in Route:", location.pathname)

    const navigate = (path) => {
        history.push(path);           
    }

    const goBack = () => {
        history.goBack();           
    }


    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={ () => navigate('/') }>
                    Go to Home
                </button>
                <button onClick={ () => goBack() }>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default Aboutpage;
