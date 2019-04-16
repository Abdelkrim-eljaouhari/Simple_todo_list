import React from "react";

class Todos extends React.Component {
  addLineThrough = e => {
    const parentElementClasseName = e.target.parentNode.parentNode;
    if (parentElementClasseName.className.indexOf("linethrough") > -1) {
      parentElementClasseName.classList.remove("linethrough");
    } else {
      parentElementClasseName.classList.add("linethrough");
    }
  };
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => (
          <li key={i} className="todos__list">
            <p>{todo}</p>
            <div className="todos-input__checkboxDelete">
              <input
                onClick={this.addLineThrough}
                type="checkbox"
                className="input_checkbox"
                name={todo}
                value={todo}
              />
              <span
                className={"todos__span"}
                onClick={() => {
                  this.props.handleDelete(todo);
                }}
              >
                <i className="far fa-trash-alt" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Todos;
