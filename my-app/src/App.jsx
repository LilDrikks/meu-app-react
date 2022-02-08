import './App.css';
import Container from './components/Container';
import {useState} from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {id:1, title:'Learning React', state:true},
    {id:2, title:'Learning book React', state:true},
    {id:3, title:'Pratice React', state:false},
    {id:4, title:'Pratice English', state:false},
  ])

  //essa é a função passada como props para o AddTask
  //ela recebe o parametro taskTitle para injetar o titulo no useState tasks
  const handleTaskAddition = (taskTitle) => {
    
    //aqui a variavel newTask recebe o array de tasks mais o novo objeto com seus valores
    const newTask = [...tasks, 
      {
        id: Math.random(10),
        title: taskTitle,
        state:false
      }]
      
      //chamando setTasks(newTask) estamos empurrando o novo valor de um array para o state de tasks
      setTasks(newTask)
      console.log(tasks)
  }

  return (
    <div className="App">
      <h1>Tasks</h1>
    <Container>
      {/* passando uma props valor função para o component AddTask*/}
      <AddTask handleTaskAddition={handleTaskAddition} />
      {/* passando uma props valor useState para o component Tasks*/}
      <Tasks tasks={tasks}/>
    </Container>
    </div>
  );
}

export default App;
