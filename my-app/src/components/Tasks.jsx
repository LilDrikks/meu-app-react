import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
 console.log(tasks)
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleDeleteTask={handleDeleteTask}
          />
          ))
        }
    </div>
  );
};
export default Tasks;
