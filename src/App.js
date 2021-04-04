import React, { useState, UseEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    console.log("Add Todo Here...", inputValue);
    setTodos([...todos, { text: inputValue, id: uuidv4() }]);
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add a task..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(inputValue);
            }}
          />
          <button type="submit">ADD</button>
        </form>
        {todos.map((entry) => (
          <div className="todo" key={entry.id}>
            <p>{entry.text}</p>
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
