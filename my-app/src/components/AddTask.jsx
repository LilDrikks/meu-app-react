import styles from './AddTask.module.css'
import AddTaskButton from './AddTaskButton';
import { useState } from "react";

//recebendo a função handleTaskAddition que altera o tasks do component App
const AddTask = ({handleTaskAddition}) => {

    //useState do titulo da tarefa em vem do input 
    const [inputData, setInputData] = useState('')


    //capturando os dados do input com o eventLisner onChange
    const handleInputChange = (event) => {
        //setando o useState da variavel inputData a cada interação no input    
        setInputData(event.target.value)
    }

    //a função que irá adicionar a tarefa recebe outra função
    const handleClickAddTask = () => {
        //essa outra função por sua vez vem como propriedade do App
        //e passa o parametro do useState inputData(valor que esta no input)
        handleTaskAddition(inputData)
    }
    return ( 
        <div className={styles.addTask}>

            {/*O input recebe seu value com oque tiver na variavel inputData para
            depois jogar esse value na função de setTasks*/}
            {/*o eventLisner que verifica oque esta sendo digitado no input seria esse onChange*/}
            <input
                value={inputData}
                onChange={handleInputChange}
                type="text"
                className={styles.addTaskInput}
            />

            <div className={styles.addTaskButtonContainer}>
            {/*O botão recebe na sua props onClick a função que adiciona a nova Task*/}
            {/**/}
            <AddTaskButton onClick={handleClickAddTask}>
                    Adicionar
            </AddTaskButton>
            </div>

        </div>
     );
}
 
export default AddTask;