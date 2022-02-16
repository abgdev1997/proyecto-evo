import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/levels.class';


const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);



    const addTask = (e) => {
        //Prevenimos la recarga automatica de pagina
        e.preventDefault();
        //Construimos la nueva tarea con los valores referenciados
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        //Añadimos la tarea usando la funcion que viene del padre
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center' style={{backgroundColor:'white'}}>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg'required autoFocus placeholder='Task Name'></input>
                <input ref={descriptionRef} id='descriptionName' type='text' className='form-control form-control-lg'required placeholder='Task Description'></input>
                <label htmlFor='selectLevel' className='sr-only'>PRIORITY</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>
                        NORMAL
                    </option>
                    <option value={LEVELS.URGENT}>
                        URGENT
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        BLOCKING
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    ADD
                </button>
            </div>
        </form>
    );
};


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
};


export default TaskForm;
