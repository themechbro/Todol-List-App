import react, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./newTodoForm";
import "./Todolist.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompleteion = this.toggleCompleteion.bind(this);
  }

  create(newtodo) {
    this.setState({ todos: [...this.state.todos, newtodo] });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompleteion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const newTodo = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={() => this.remove(todo.id)}
          editTodo={this.updateTodo}
          toggleTodo={this.toggleCompleteion}
        />
      );
    });
    return (
      <div className="todolist">
        <h1>
          {" "}
          React Todo List <span>A simple react Todo List App</span>
        </h1>
        <ul>{newTodo}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
