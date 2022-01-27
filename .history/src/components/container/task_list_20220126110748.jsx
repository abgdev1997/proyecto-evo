import React from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/levels.class'
import { LEVELS } from '../../models/levels.enum';

const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;
