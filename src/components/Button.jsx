import React from 'react';

const Button = ({onClick, children, styles}) => {
  return (
    <button onClick={onClick} className={`m-2 btn ${styles}`}>
      {children}
    </button>
  );
};

export default Button;