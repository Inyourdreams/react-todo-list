import React from "react";

const TodoList = props => {
  return (
    <ul className="list">
      {props.todos.map((todo, index) => {
        return (
          <li style={{ backgroundColor: props.background }} key={todo.title}>
            <span>{todo.title}</span>
            <button
              className="remove-btn waves-effect waves-light btn-small"
              onClick={() => props.removeTodo(index)}
            >
              Remove TODO
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
