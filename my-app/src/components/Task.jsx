import {CgClose, CgInfo} from 'react-icons/cg'

import styles from './Tasks.module.css'

const Task = ({task, handleTaskClick, handleDeleteTask}) => {
    return ( 
        <>
            {/*style condicional com a condição do task.state ser verdadeiro e caso seja style=borderLeft:'4px solid chartreuse'*/}
            <div
            className={styles.task} 
            style={task.state ? {borderLeft: '4px solid chartreuse'}: {borderRight: '4px solid  red'}}
            onClick={() => handleTaskClick(task.id)}>
                {/*titulo da tarefa concertado o overflow das frases, cgicons react*/}
                <div className={styles.title}>{task.title}</div>
                <CgInfo className={styles.buttonInfo}  />
                <CgClose  className={styles.buttonClose} onClick={() => handleDeleteTask(task)} />
            </div>
              {/*eventListener onClick recebe uma função que exaculta a função pois não podemos passar uma função com parametro diretamente */}
              {/*a fução chamada é a handleTaskClick(com a prop task.id) que será o id exato do item que esta sendo renderizado e clicado*/}
        </>
     )
}
 
export default Task