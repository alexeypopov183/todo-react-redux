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

  const getTime = (numDate) => {
    const date = new Date(numDate);
    const nowDate = new Date();
    if (nowDate - date >= 86400000) {
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    }
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  return (
    <div className="todo__item">
      <p style={{fontWeight: mark}}>{index + 1}. {el.text} </p>
      <div className="todo__btns">
        <span className="todo__time">{getTime(el.id)}</span>
        <Button onClick={() => handleDeleteItem(el.id)} styles="btn-danger">Удалить</Button>
        <Button onClick={() => handleMarkItem(el.id)} styles="btn-success">Отметить</Button>
      </div>
    </div>
  );
};

export default TodoItem;