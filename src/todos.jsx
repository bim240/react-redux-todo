import React from "react";
import { connect } from "react-redux";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleTodo = (id) => {
    this.props.dispatch({ type: "toggle_todo", id: id });
  };

  handleDelete = (id) => {
    this.props.dispatch({ type: "delete_todo", id: id });
  };
  render() {
    // console.log(this.props);
    return (
      <div className="list">
        {this.props.allTodos.map((todo) => {
          return (
            <div className="single_list" key={todo.id}>
              <input
                type="checkbox"
                onChange={() => this.toggleTodo(todo.id)}
                checked={todo.isDone}
              />
              <p className={todo.isDone ? "line_through" : ""}>{todo.text}</p>
              <span onClick={() => this.handleDelete(todo.id)}>X</span>
            </div>
          );
        })}
      </div>
    );
  }
}

function filterTodo(allTodos, activeTab) {
  if (activeTab === "all") {
    return allTodos;
  } else if (activeTab === "active") {
    return allTodos.filter((todo) => !todo.isDone);
  } else if (activeTab === "completed") {
    return allTodos.filter((todo) => todo.isDone);
  }
}
function mapStateToProps(state) {
  var allTodos = filterTodo(state.allTodos, state.activeTab);
  return { allTodos };
}
export default connect(mapStateToProps)(Todos);
