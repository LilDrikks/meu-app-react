import styles from "./AddTask.module.css";
import AddTaskButton from "./AddTaskButton";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

//recebendo a função handleTaskAddition que altera o tasks do component App
const AddTask = () => {
  const dados = useContext(UserContext)

  //capturando os dados do input com o eventLisner onChange
  const handleInputChange = (event) => {
    //setando o useState da variavel inputData a cada interação no input
    dados.setInputData(event.target.value);
  };

  return (
    <div className={styles.addTask}>
      {/*O input recebe seu value com oque tiver na variavel inputData para
            depois jogar esse value na função de setTasks*/}
      {/*o eventLisner que verifica oque esta sendo digitado no input seria esse onChange*/}
      <input
        value={dados.inputData}
        onChange={handleInputChange}
        type="text"
        className={styles.addTaskInput}
      />
      <div className={styles.addTaskButtonContainer}>
        {/*O botão recebe na sua props onClick a função que adiciona a nova Task*/}
        {/**/}
        <AddTaskButton>Adicionar</AddTaskButton>
      </div>
    </div>
  );
};
export default AddTask;
