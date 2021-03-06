import React from "react";
import { connect } from "react-redux";

import Todos from "./todos";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoText: "" };
  }

  handleTodoInput = (e) => {
    this.setState({ todoText: e.target.value });
  };
  addTodo = () => {
    // using dispatch
    this.props.dispatch({ type: "add_todo", payload: this.state.todoText });
    // add out todo to redux store
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <>
        {" "}
        <div className="todo_container">
          <input
            onChange={this.handleTodoInput}
            type="text"
            className="newlist"
            value={this.state.todoText}
          />
          <button onClick={this.addTodo}>Add New List</button>
          <Todos />
          <Footer />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return { allTodos: state.allTodos };
}

export default connect(mapStateToProps)(App);
