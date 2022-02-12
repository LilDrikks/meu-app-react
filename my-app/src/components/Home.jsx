import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Home = ({
  handleDeleteTask,
  handleTaskAddition,
  handleTaskClick,
  tasks,
}) => {
  return (
    <>
      {/* passando uma props valor função para o component AddTask*/}
      <AddTask handleTaskAddition={handleTaskAddition} />
      {/* passando uma props valor useState para o component Tasks*/}
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};
export default Home;
