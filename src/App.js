import './App.css';
import NewTodo from './Components/NewTodo';
import TodoDataEntry from './Components/TodoDataEntry';
import TodoItem from './Components/TodoItem';
import React ,{useState} from 'react';

function App() {
  const taskData =[]
  const [task,setTask] = useState(taskData);
  const appData = (data)=>{
    setTask((prevData)=>{
      return [data , ...prevData]
    });
  }
  
  return (
    <div className="App">
      <NewTodo items={task} appData = {appData}></NewTodo>
    </div>
  );
}

export default App;
