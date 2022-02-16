import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

const Aboutpage = () => {

    const location = useLocation();

    console.log("'We are in Route:", location.pathname)

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button>
                    Go to Home
                </button>
                <button>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default Aboutpage;
