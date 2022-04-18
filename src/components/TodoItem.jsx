import React from 'react';
import {formatDistanceToNowStrict} from "date-fns";
import {ru} from "date-fns/locale";
import {useDispatch} from "react-redux";

import {deleteTodo, doneTodo, markTodo} from "../redux/actions/action";
import Button from "./Button";

const TodoItem = ({el, index, mark, done}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleMarkItem = (id) => {
    dispatch(markTodo(id));
  }

  const handleDoneItem = (id) => {
    dispatch(doneTodo(id))
  }

  const getTime = (numDate) => {
    const date = new Date(numDate);
    return `${formatDistanceToNowStrict(date, {locale: ru})} назад`

  }

  return (
    <div className="todo__item">
      <div className="todo__info">
        <button onClick={() => handleDoneItem(el.id)}></button>
        <p style={{fontWeight: mark, textDecoration: done, marginRight: 10}}>{index + 1}. {el.text} </p>
        <span className="todo__time">{getTime(el.id)}</span>
      </div>

      <div className="todo__btns">
        <Button onClick={() => handleDeleteItem(el.id)} styles="btn-danger">Удалить</Button>
        <Button onClick={() => handleMarkItem(el.id)} styles="btn-success">Отметить</Button>
      </div>
    </div>
  );
};

export default TodoItem;