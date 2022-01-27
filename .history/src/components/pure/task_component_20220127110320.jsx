import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/levels.class';


const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount...`)
        };
    }, [task]);

    return (

        <tr className='fw-normal'>
            <th>
                {/* ms-2 Margin 2 */}
                <span className='ms-2'>{task.name}</span>
            </th>
            <td>
                {/* align-middle alinea al centro */}
                <span className='align-middle'>{task.description}</span>
            </td>
            <td>
                {/* TODO: Sustituir por un badge */}
                <span className='align-middle'>{task.level}</span>
            </td>
            <td>
                {/* <span className='align-middle'>{task.completed ? 'COMPLETED' : 'PENDING'}</span> */}
                { task.completed ? 
                    (<i className='bi bi-journal-check' style={{color: 'green', fontWeight:'bold'}}></i>)
                    : (<i className='bi bi-journal-x' style={{color: 'tomato', fontWeight:'bold'}}></i>)
                }
            </td>
        </tr>

        // <div>
        //     <h2>
        //         Name: {task.name}
        //     </h2>
        //     <h3>
        //         Description: {task.description}
        //     </h3>
        //     <h4>
        //         Level: {task.level}
        //     </h4>
        //     <h5>
        //         This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
