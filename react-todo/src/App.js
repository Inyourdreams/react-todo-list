import React, { Component } from "react";
import "./App.css";
import { CirclePicker } from "react-color";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      background: "",
      message: "TODO-LIST",
      newTodo: "",
      todos: [
        {
          title: "Learn React"
        },
        {
          title: "Get job in Company"
        }
      ]
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
    this.newTodoChanged = this.newTodoChanged.bind(this);
  }

  newTodoChanged = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  formSubmitted = event => {
    event.preventDefault();
    console.log(this.state.newTodo);
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo
        }
      ]
    });
  };

  removeTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  };

  handleChange = color => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div className="App indigo accent-4">
        <div className="color-picker">
          <CirclePicker
            onChangeComplete={this.handleChange}
            color={this.state.background}
          />
        </div>
        <h3>{this.state.message}</h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          newTodoChanged={this.newTodoChanged}
          formSubmitted={this.formSubmitted}
        />
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          background={this.state.background}
        />
      </div>
    );
  }
}

export default App;
