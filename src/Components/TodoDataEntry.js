import React ,{useState} from 'react';
import "./TodoDataEntry.css";
import { TodoHeading } from './TodoHeading';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
export const TodoDataEntry = (props) => {
  const [taskData,setTask] = useState(' ');
  const getTask = (event)=>{
    setTask(event.target.value);
  }
  const getData = (event)=>{
    event.preventDefault();
    const dataArr={
        id:Math.random().toString(),
        task:taskData
    };
    props.dataGet(dataArr);
    setTask('');
  } 
  return (
      <div>
        <div className='form-todo'>
            <form onSubmit={getData}  className='entry-todo'>
                <input onChange={getTask} type='text' value={taskData} placeholder='Write yor task?'/>
                <button type='submit'>+</button>
            </form>
        </div>
    </div>
  )
}

export default TodoDataEntry;