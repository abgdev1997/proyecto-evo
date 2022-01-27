import React, {useState, useEffect} from 'react';
import {Task} from '../../models/levels.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task_component'
import '../../styles/task.scss'

const TaskList = () => {

    const defaultTask1 = new Task('Example1', 'description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'description3', false, LEVELS.BLOCKING);

    


    //Estados del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [tasks]);

    const changeCompleted = (task) => {
        console.log('Change this task:', task)
        //Conseguimos el index de la tarea que queremos cambiar
        const index = tasks.indexOf(task);
        //Guardamos la lista de tareas dentro de una variable temporal
        const tempTasks = [...tasks]
        //Cambiamos el valor completed de la tarea que ya existe con el indice index
        tempTasks[index].completed = !tempTasks[index].completed
        //Actualizamos todas las tareas para introducir la que ha cambiado
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Deleting this task:', task)
        //Conseguimos el index de la tarea que queremos borrar
        const index = tasks.indexOf(task);
        //Guardamos la lista de tareas dentro de una variable temporal
        const tempTasks = [...tasks];
        //Borramos la tarea con splice(indice, numero de borrado hacia delante(en este caso solo es 1, la tarea a la que nos referimos))
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    return (
        <div>
            {/* Dividimos el contenedor en 12 columnas */}
            <div className='col-12'>
                {/* Usamos la class card */}
                <div className='card'>
                    {/* CARD HEADER (TITLE) */}
                    {/* card-header es la cabecera de la carta, p-3 es padding 3 */}
                    <div className='card-header p-3' style={{backgroundColor:'antiquewhite'}}>
                        <h5>
                            YOUR TASKS:
                        </h5>
                    </div>
                </div>
                {/* CARD BODY (CONTENT) */}
                <div 
                className='card-body'
                data-mdb-perfect-scrollbar='true'
                style={ {position: 'relative', height:'400px', backgroundColor:'white'}
                }>
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
                            {tasks.map((task, index) => <TaskComponent
                                                            completed={changeCompleted}
                                                            deleteTask={deleteTask}
                                                            key={index}
                                                            task={task}>
                                                            </TaskComponent>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default TaskList;
