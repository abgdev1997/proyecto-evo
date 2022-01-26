import React, {useState, useEffect} from 'react';
import {Task} from '../../models/levels.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task_component'

const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        {/*TODO: Cambiar estado de una tarea'*/}
    }

    return (
        <div>
            <div>
                YOUR TASKS:
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskList;
