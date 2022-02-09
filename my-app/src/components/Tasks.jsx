import Task from './Task'

const Tasks = ({tasks, handleTaskClick, handleDeleteTask}) => {
    return ( 
        <div>
            {tasks.map(task => ( 
                <Task task={task} handleTaskClick={handleTaskClick} handleDeleteTask={handleDeleteTask}  />
            ) )}
        </div>
     )
}
 
export default Tasks