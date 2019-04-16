import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Todos from "./todos";
import "./styles.css";
class App extends React.Component {
  state = {
    todos: [],
    noTodos: "Currently you have no to do list",
    value: "",
    iconClicked: "false"
  };

  handleClick = value => {
    if (value) {
      let todos = [...this.state.todos].concat(value);
      this.setState({ todos });
    }
  };

  handleDelete = element => {
    let todos = this.state.todos.filter(todo => {
      return todo !== element;
    });
    this.setState({ todos });
  };
  deletAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    const { todos, noTodos, iconClicked } = this.state;
    return (
      <div>
        <h1>To do list</h1>
        <div className="App">
          <div className="todo-list-wrapper">
            {todos.length === 0 && <p className="noTodo-p">{noTodos}</p>}
            <Todos
              todos={this.state.todos}
              handleLineThrough={this.handleLineThrough}
              handleDelete={this.handleDelete}
            />
            <Form handleClick={this.handleClick} />
            <button
              onClick={this.deletAll}
              className={`btn_delete ${
                iconClicked ? "btn_deleteDown" : "btn_deleteAll"
              }`}
            >
              Delete All
            </button>
            <span>
              <i
                onClick={() => {
                  this.setState({ iconClicked: !this.state.iconClicked });
                }}
                className={`fas ${
                  iconClicked ? "fas fa-sort-up" : "fa-sort-down"
                }`}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
