import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { useContext } from "react";

import UserContext from '../contexts/UserContext'
const Home = () => {
  const dados = useContext(UserContext)

  return (
    <>
      {/* passando uma props valor função para o component AddTask*/}
      <AddTask handleTaskAddition={dados.handleTaskAddition} />
      {/* passando uma props valor useState para o component Tasks*/}
      <Tasks
        tasks={dados.tasks}
        handleTaskClick={dados.handleTaskClick}
        handleDeleteTask={dados.handleDeleteTask}
      />
    </>
  );
};
export default Home;
