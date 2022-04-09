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
    setText('');
    e.preventDefault();
    dispatch(saveTodo(text));
  }

  return (
    <div>
      <form action="">
        <input
          value={text}
          onChange={handleChange}
          type="text"
        />
        <Button styles="btn-outline-primary" onClick={ handleSubmit }>Add</Button>
      </form>
    </div>
  );
};

export default Header;