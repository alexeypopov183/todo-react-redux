import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {saveTodo} from "../redux/actions/action";
import Button from "./Button";

const Header = ({handleFilter}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setText('');
      const date = new Date();
      dispatch(saveTodo(text, date));
    } else {
      alert('Вы ничего не написали!');
    }
  }

  return (
    <div className="header">
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Запишите дела..."
          value={text}
          onChange={handleChange}
          type="text"
        />
        <Button type="button" styles="btn-outline-primary" >Добавить</Button>
      </form>
      <input onChange={(e) => handleFilter(e)} placeholder="Поиск" type="text"/>
    </div>
  );
};

export default Header;