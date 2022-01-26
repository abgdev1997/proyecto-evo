import React from 'react';
import {Task} from '../../models/levels.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task_component'

const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                YOUR TASKS:
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent name={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskList;
