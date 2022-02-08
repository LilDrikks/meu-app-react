import styles from './Container.module.css'
const Container = ({tasks, children}) => {
    return ( 
        <div className={styles.containerApp}>
            {children}
        </div>
     );
}
 
export default Container;