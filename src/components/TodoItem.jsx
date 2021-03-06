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
        {el.done
          ? <input checked onClick={() => handleDoneItem(el.id)} className="form-check-input" type="checkbox" />
          : <input onClick={() => handleDoneItem(el.id)} className="form-check-input" type="checkbox" />
        }
        <p style={{fontWeight: mark, textDecoration: done, marginRight: 10}}>{index + 1}. {el.text} </p>
        <span className="todo__time">{getTime(el.id)}</span>
      </div>

      <div className="todo__btns">
        <Button onClick={() => handleDeleteItem(el.id)} styles="btn-danger">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash"
               viewBox="0 0 16 16">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </Button>
        <Button onClick={() => handleMarkItem(el.id)} styles="btn-success">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path
              d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
        </Button>
      </div>
      </div>
  );
};

export default TodoItem;