import React from "react";

const TodoItem = props => {
  const { todo } = props;
  return (
    <li style={{ backgroundColor: props.background }} key={todo.title}>
      <span>{todo.title}</span>
      <button
        className="remove-btn waves-effect waves-light btn-small"
        onClick={index => props.removeTodo(index)}
      >
        Remove TODO
      </button>
    </li>
  );
};

export default TodoItem;
