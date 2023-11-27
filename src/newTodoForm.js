import react, { Component } from "react";
import uuid from "uuid";
import "./TodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const keying = { ...this.state, id: uuid(), completed: false };
    this.props.createTodo(keying);
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="newTodoForm">
        <label htmlFor="task">New Todo</label>
        <input
          required
          type="text"
          name="task"
          id="task"
          placeholder="Write your Task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
