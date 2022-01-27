import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/levels.class';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task, completed, remove}) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount...`)
        };
    }, [task]);
    
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
            case LEVELS.URGENT:
                return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
            default:
                break;    
        }
    }

    function taskCompletedIcon(){
        if(task.completed){
            return(<i onClick={() => completed(task)} className='bi bi-journal-check task-action' style={{color: 'green', fontWeight:'bold'}}></i>);
        }else{
            return(<i onClick={() => completed(task)} className='bi bi-journal-x task-action' style={{color: 'blue', fontWeight:'bold'}}></i>);
        }
    }

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
                {/* <span className='align-middle'>{task.level}</span> */}
                {taskLevelBadge()}
            </td>
            <td>
                {/* <span className='align-middle'>{task.completed ? 'COMPLETED' : 'PENDING'}</span> */}
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color:'tomato', fontWeight:'bold'}}></i>
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
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
};


export default TaskComponent;
