import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "./Button";
import {deleteTodo, markTodo} from "../redux/actions/action";
import TodoItem from "./TodoItem";

const Main = () => {
  const todo = useSelector(state => state);

  return (
    <div className="todo">
      { todo.map((el, index) => (
        <TodoItem el={el} index={index}/>
      ))}
    </div>
  );
};

export default Main;