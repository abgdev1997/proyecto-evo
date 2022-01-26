import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/levels.class';


const TaskComponent = ({task}) => {
    return (
        <div>
            
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
