import React from 'react';
import "./NewTodo.css";
import TodoDataEntry from './TodoDataEntry';
import  TodoHeading  from './TodoHeading';
import TodoItem from './TodoItem';
export const NewTodo = (props) => {
  const getData=(data)=>{
    const dataArr={...data};
    props.appData(dataArr);
  }
  return (
    <div className='main-todo'>
      <TodoHeading></TodoHeading>
      <TodoDataEntry dataGet={getData}></TodoDataEntry>
      {props.items.map((data)=>(
        <TodoItem key={data.id} task={data.task} />
      ))}
    </div>
  )
}

export default NewTodo;
