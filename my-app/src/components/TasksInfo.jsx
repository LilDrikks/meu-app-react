import styles from "./TasksInfo.module.css";

import { Link, useParams } from "react-router-dom";
import AddTaskButton from "./AddTaskButton";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const TasksInfo = () => {
  const dados = useContext(UserContext)
  console.log(dados)
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
          Sálario: {dados.userData.salary}
        </p>
        <p>
          Aprovação: {String(dados.userData.approved)}
        </p>
      </div>
    </>
  );
};

export default TasksInfo;
