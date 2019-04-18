import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        className="input-field col s6"
        onChange={props.newTodoChanged}
        type="text"
        name="newTodo"
        id="newTodo"
        value={props.newTodo}
      />
      <button
        className="btn-floating pulse btn waves-effect waves-light"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
