import React from 'react';
import { useLocation } from 'react-router-dom';

const Statepage = () => {
    const location = useLocation();

    console.log(location.state.online);
    console.log(location.search);

    return (
        <div>
            <h1>State: {location.state.online}</h1>
        </div>
    );
}

export default Statepage;
