import styles from "./AddTask.module.css";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
const AddTaskButton = ({ children }) => {
  const dados = useContext(UserContext)
  return (
    //esse botão usa o parametro children para flexbilizar o conteúdo que ira ter dentro de si
    //também usa o parametro onClick para passar a função que ira agregar o eventLisner onClick do botão
    <button onClick={dados.handleClickAddTask} className={styles.addTaskButton}>
      {children}
    </button>
  );
};
export default AddTaskButton;
