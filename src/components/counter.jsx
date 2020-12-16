import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // using an arrow function inherits this instead of creating a new one
  handleIncrement = () => {
    // telling react that the state of this componenet will change
    this.setState({ value: this.state.value + 1 });
  };

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
          onClick={() => this.handleIncrement(this.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
