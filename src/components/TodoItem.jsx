import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, markTodo} from "../redux/actions/action";

import Button from "./Button";

const TodoItem = ({el, index, mark}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleMarkItem = (id) => {
    dispatch(markTodo(id));
  }
  return (
    <div
      style={{fontWeight: mark}}
      key={`${el.id}_${el.text}`}
      className="todo__item">
      {index + 1}. {el.text}
      <Button onClick={() => handleDeleteItem(el.id)} styles="btn-danger">Delete</Button>
      <Button onClick={() => handleMarkItem(el.id)} styles="btn-success">Mark</Button>
    </div>
  );
};

export default TodoItem;