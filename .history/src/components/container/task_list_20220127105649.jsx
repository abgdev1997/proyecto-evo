import React, {useState, useEffect} from 'react';
import {Task} from '../../models/levels.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task_component'

const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estados del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        {/*TODO: Cambiar estado de una tarea'*/}
    }

    return (
        <div>
            {/* Dividimos el contenedor en 12 columnas */}
            <div className='col-12'>
                {/* Usamos la class card */}
                <div className='card'>
                    {/* CARD HEADER (TITLE) */}
                    {/* card-header es la cabecera de la carta, p-3 es padding 3 */}
                    <div className='card-header p-3 '>
                        <h5>
                            YOUR TASKS:
                        </h5>
                    </div>
                </div>
                {/* CARD BODY (CONTENT) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>TITLE</th>
                                <th scope='col'>DESCRIPTION</th>
                                <th scope='col'>PRIORITY</th>
                                <th scope='col'>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO: Aplicar un For/Map para renderizar una lista */}
                            <TaskComponent task={defaultTask}></TaskComponent>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default TaskList;
