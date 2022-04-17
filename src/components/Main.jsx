import React from 'react';
import {useSelector} from "react-redux";

import TodoItem from "./TodoItem";

const Main = ({filterPost}) => {
  const todo = useSelector(state => state);

  const sortedPosts = (todo) => {
    if (filterPost) {
      return todo.filter(el => el.text.includes(filterPost));
    }
    return todo;
  }

  return (
    <div className="todo">
      {
        sortedPosts(todo).map((el, index) => (
        <TodoItem key={el.id} mark={el.mark ? 'bold' : 'inherit'} el={el} index={index}/>
      ))}
    </div>
  );
};

export default Main;