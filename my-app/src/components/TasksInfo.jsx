import styles from "./TasksInfo.module.css";

import { Link, useParams } from "react-router-dom";
import AddTaskButton from "./AddTaskButton";

const TasksInfo = () => {
  //Variável params que recebe o valor de useParems que esta na Url
  const params = useParams();
  return (
    <>
      {/*Link é também uma propriedade do react router dom que cria um componente de link igual a tag <a />*/}
      <div className={styles.buttonGoBack}>
        <Link to="/">
          <AddTaskButton>Voltar</AddTaskButton>
        </Link>
      </div>
      <div className={styles.taskInfo}>
        {/*H2 é titulo que recebe como children o params de nome taskTitle que seria a propriedade vinda la do task como set useNavigate
                                 passado para o App  e captada aqui por useParams que veio do Route path do component TaskInfo
                                */}
        <h2>{params.taskTitle}</h2>
        <p>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem
        </p>
      </div>
    </>
  );
};

export default TasksInfo;
