import React, {useState} from "react";

import "../index.scss";

import Header from "./Header";
import Main from "./Main";

function App() {
  const [filterPost, setFilterPost] = useState('');

  const handleFilter = (e) => {
    setFilterPost(e.target.value);
  }

  return (
    <div className="container">
      <Header handleFilter={handleFilter}/>
      <Main filterPost={filterPost}/>
    </div>
  );
}

export default App;
