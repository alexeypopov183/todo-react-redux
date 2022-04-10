import React from 'react';
import {useSelector} from "react-redux";

import TodoItem from "./TodoItem";

const Main = () => {
  const todo = useSelector(state => state);
  return (
    <div className="todo">
      { todo.map((el, index) => (
        <TodoItem mark={el.mark ? 'bold' : 'inherit'} el={el} index={index}/>
      ))}
    </div>
  );
};

export default Main;