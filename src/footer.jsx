import React from "react";
import { connect } from "react-redux";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFilter = (key) => {
    console.log(this.props);
    this.props.dispatch({ type: key });
  };
  render() {
    return (
      <div className="footer">
        <button
          onClick={() => this.handleFilter("active")}
          className={this.props.activeTab === "active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => this.handleFilter("completed")}
          className={this.props.activeTab === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => this.handleFilter("all")}
          className={this.props.activeTab === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => this.handleFilter("clearCompleted")}
          className={this.props.activeTab === "clear_completed" ? "active" : ""}
        >
          clearCompleted
        </button>
      </div>
    );
  }
}

function mapStateToFunction(state) {
  return { activeTab: state.activeTab };
}
export default connect(mapStateToFunction)(Footer);
