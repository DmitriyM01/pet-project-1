import { useEffect, useRef, useState } from "react";
import { actions as tasksActions } from '../slices/tasksSlice.js';
import { useDispatch, useSelector } from "react-redux";

import { FaTrash } from "react-icons/fa";

const Tasks = ({ setNewTask, newTask, setModalState, modalState }) => {
    const input = useRef(null);
    const dispatch = useDispatch()
    const { tasks, ids } = useSelector((store) => store.tasksReducer);
    const [ currentId, setCurrentId ] = useState(0)

    const switchModalState = () => {
        switch(modalState) {
            case 'opened':
              setModalState('closed');
              break;
            case 'closed':
              setModalState('opened');
              break;
            default:
                console.log('Ошибка в состоянии модального окна')
        }
    }

    useEffect(() => {
        input.current.focus()
    }, [modalState])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(tasksActions.addTask({ task: e.target[0].value, id: currentId }))
        setNewTask('');
        setCurrentId(currentId + 1)
    }

    const switchTaskState = (id) => {
        dispatch(tasksActions.switchTaskState({ id }))
    }

    return (
        <div className="tasks-box">

            <div className={`tasks-modal ${modalState === 'opened' ? '' : 'active'}`}>
                <div className="modal header">
                    <button onClick={() => dispatch(tasksActions.deleteFinishedTasks())} className="delete-finished-tasks-btn">Delete</button>
                    <button onClick={switchModalState} className="close-modal-btn">Close</button>
                </div>
                <hr />
                <div className="modal-content">
                    {ids.map((id) => {
                        console.log(tasks[id])
                        const { task, finished } = tasks[id]
                        return (
                            <div className="task" key={id}>
                                <input onClick={() => switchTaskState(id)} type="checkbox" />
                                <span className={finished ? 'done' : ''}>{task}</span>
                                <button onClick={() => dispatch(tasksActions.deleteTask({ id }))} className="delete-task-btn">
                                    <FaTrash />
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className="modal-footer">
                    <form className="modal-form" onSubmit={onSubmit}>
                        <input required ref={input} className="modal-input" type="text" name="task" placeholder="New Task"  onChange={e => setNewTask(e.target.value)} value={newTask} />
                    </form>
                </div>
            </div>

            <button onClick={switchModalState} className="open-modal-btn">
                Tasks
            </button>
        </div>
    )
}

export default Tasks;