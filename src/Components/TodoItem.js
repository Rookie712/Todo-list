import React ,{useState} from 'react';
import "./TodoItem.css";

export const TodoItem = (props) => {
  const [flag,setFlag] = useState(true);
  const taskDone = (event)=>{
    setFlag(!flag);
  }
  
  return (
    <div className='main-item'>
        <i  className="circle-item fa-solid fa-circle"></i>
        {flag && <div className='task'>{props.task}</div>}
        {!flag && <div className='task'><del>{props.task}</del></div>}
        <button onClick={taskDone}><i  className="check-item fa-solid fa-check"></i></button>
    </div>
  )
}

export default TodoItem;
