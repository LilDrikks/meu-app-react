import styles from './AddTask.module.css'
const AddTaskButton = ({children, onClick}) => {
    return ( 
        //esse botão usa o parametro children para flexbilizar o conteúdo que ira ter dentro de si
        //também usa o parametro onClick para passar a função que ira agregar o eventLisner onClick do botão
        <button onClick={onClick} className={styles.addTaskButton}>{children}</button>
     );
}
 
export default AddTaskButton;