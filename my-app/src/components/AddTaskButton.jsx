import styles from "./AddTask.module.css";

fetch("http://15.228.185.140:3333/person/",
{
    method: "POST",
    body: {"name":"teste", "salary": 0}
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })

const AddTaskButton = ({ children, onClick }) => {
  return (
    //esse botão usa o parametro children para flexbilizar o conteúdo que ira ter dentro de si
    //também usa o parametro onClick para passar a função que ira agregar o eventLisner onClick do botão
    <button onClick={onClick} className={styles.addTaskButton}>
      {children}
    </button>
  );
};
export default AddTaskButton;
