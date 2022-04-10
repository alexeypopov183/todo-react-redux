import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {saveTodo} from "../redux/actions/action";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setText('');
      dispatch(saveTodo(text));
    } else {
      alert('Вы ничего не написали!')
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Type todo..."
          value={text}
          onChange={handleChange}
          type="text"
        />
        <Button type="button" styles="btn-outline-primary" >Add</Button>
      </form>
    </div>
  );
};

export default Header;