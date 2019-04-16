import React from "react";
import "./styles.css";

class Form extends React.Component {
  handlSubmit = e => {
    e.preventDefault();
    let todoInput = e.target.elements.todoInput.value;
    this.props.handleClick(todoInput);
    e.target.elements.todoInput.value = "";
  };
  render() {
    return (
      <div className="input-Box">
        <form onSubmit={this.handlSubmit}>
          <input type="text" placeholder="Enter your thing" name="todoInput" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
