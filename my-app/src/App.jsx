import "./App.css";

import Container from "./components/Container";
import Header from "./components/Header";
import Home from "./components/Home";
import TasksInfo from "./components/TasksInfo";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const reqApi = async () => {
  const fetchNodeApi = await fetch('http://15.228.185.140:3333/person/people')
  const fetchNodeApiJson = await fetchNodeApi.json()
  setTasks(...tesks, fetchNodeApiJson)
}
reqApi()

function App() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Task1", state: false },
    { id: uuidv4(), title: "Task2", state: false },
    { id: uuidv4(), title: "Task3", state: false },
    { id: uuidv4(), title: "Task4", state: false },
    { id: uuidv4(), title: "Task5", state: false },
  ]);
  //essa é a função passada como props para o AddTask.
  //ela recebe o parametro taskTitle para injetar o titulo no useState tasks.
  const handleTaskAddition = (taskTitle) => {
    //aqui a variavel newTask recebe o array de tasks mais o novo objeto com seus valores.
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        state: false,
      },
    ];
    //chamando setTasks(newTasks) estamos empurrando o novo valor de um array para o state de tasks.
    setTasks(newTasks);
  };

  //Função para apagar um item do tasks que recebe taskId vindo do botão em Task que recebe a prop task especifica para ser removida.
  const handleDeleteTask = (taskId) => {
    //busca no tasks o index do item taskId e aramazena na constante index.
    const index = tasks.indexOf(taskId);
    //condição se index for verdadeiro em uma array.
    if (index > -1) {
      //o valor de tasks removendo o item do index é atribuido o novo tasks a newTasks.
      const newTasks = tasks.splice(index, 1);
      //setando newTasks ao useState de tasks.
      setTasks(newTasks);
    }
  };

  //a função recebe o parametro id para ter certeza do item que esta sendo modificado
  const handleTaskClick = (taskId) => {
    //chama um map no useSate tasks mapeando cada item e adicinando condicionalmente em um novo array.
    const newTasks = tasks.map((task) => {
      //condição que verifica o id do item clicado e altera sua propriedade state para o valor contrario false/true true/false.
      if (task.id === taskId) return { ...task, state: !task.state };
      //caso o valor do id não seja encontrado no array tasks ira retornar task normal sem alteração e não execulta a linha de baixo.
      return task;
    });
    //caso o valor do id seja encontrado no array ele modifica tasks injeta seu valor na constante newTasks e seta com
    //setTasks( a constante newTasks ).
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Container>
        <Header />
        {/*BrowserRouter é o component que rodeia a aplicação dando lugar parar as routes existentes.*/}
        <BrowserRouter>
          {/*Routes instância um local para rotas da página */}
          <Routes>
            {/*Route é a rota em si que irá renderizar o componente passando o exact path.
                element é a prop que define qual o componente a ser renderizado.
              */}
            <Route
              exact
              path="/"
              element={
                <Home
                  handleTaskClick={handleTaskClick}
                  handleDeleteTask={handleDeleteTask}
                  handleTaskAddition={handleTaskAddition}
                  tasks={tasks}
                />
              }
            />
            {/*Route com o path passando um paramêtro de Url que será o mesmo nome da task que virá de task pelo useNavigate. */}
            <Route exact path="tasks/:taskTitle" element={<TasksInfo />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
export default App;
