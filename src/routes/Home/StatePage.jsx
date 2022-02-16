import React from 'react';
import { useLocation } from 'react-router-dom';

const Statepage = () => {
    const location = useLocation();

    console.log('Location.state.online', location.state.online);
    console.log('Location.search', location.search);

    return (
        <div>
            <h1>State: {location.state.online ? 'The user is online' : 'The user is offline'}</h1>
        </div>
    );
}

export default Statepage;
