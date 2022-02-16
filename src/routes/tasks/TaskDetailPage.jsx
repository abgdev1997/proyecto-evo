import React from 'react';
import { useParams } from 'react-router-dom';

const Taskdetailpage = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Tasks Details: {id}</h1>
        </div>
    );
}

export default Taskdetailpage;
