import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "./Button";
import {deleteTodo, markTodo} from "../redux/actions/action";

const Main = () => {
  const todo = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleMarkItem = (id) => {
    dispatch(markTodo(id));
  }

  return (
    <div className="todo">
      { todo.map((el, index) => (
        <div
          key={`${el.id}_${el.text}`}
          className="todo__item">
          {index + 1}. {el.text}
          <Button onClick={() => handleDeleteItem(el.id)} styles="btn-danger">Delete</Button>
          <Button onClick={() => handleMarkItem(el.id)} styles="btn-success">Now</Button>
        </div>
      ))}
    </div>
  );
};

export default Main;