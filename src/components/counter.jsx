import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span
          style={{ marginRight: 2 + "em" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
        // pass reference of counter object cause it will make the implementation of the handler simpler
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  // dynamically changes the appearance of the count button based on the value
  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // dynamically determine what to display in the count button
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
