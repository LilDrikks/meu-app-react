import styles from './Tasks.module.css'
const Task = ({task}) => {
    return ( 
        <p className={styles.task}>{task.title}</p>
     );
}
 
export default Task;