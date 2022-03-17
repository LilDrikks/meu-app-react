import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styles from "./Tasks.module.css";
import UserContext from '../contexts/UserContext';


const Task = ({ task }) => {
  
  const dados = useContext(UserContext);
  
  const navigate = useNavigate();

  function handleClickTaskInfo() {
    navigate(`tasks/${task.name}/${task._id}`);
    dados.setUserData(task)
  }
  
  return (
    <>
      {/*style condicional com a condição do task.state ser verdadeiro e caso seja style=borderLeft:'4px solid chartreuse'*/}
      <div
        className={styles.task}
        style={
          task.approved
            ? { borderLeft: "4px solid chartreuse" }
            : { borderRight: "4px solid  red" }
        }
        onClick={() => dados.handleTaskClick(task._id)}
      >
        {/*titulo da tarefa concertado o overflow das frases, cgicons react*/}
        <div className={styles.title}>{task.name}</div>
        <CgInfo className={styles.buttonInfo} onClick={handleClickTaskInfo} />
        <CgClose
          className={styles.buttonClose}
          onClick={() => dados.handleDeleteTask(task)}
        />
      </div>
      {/*eventListener onClick recebe uma função que exaculta a função pois não podemos passar uma função com parametro diretamente */}
      {/*a fução chamada é a handleTaskClick(com a prop task.id) que será o id exato do item que esta sendo renderizado e clicado*/}
    </>
  );
};
export default Task;
