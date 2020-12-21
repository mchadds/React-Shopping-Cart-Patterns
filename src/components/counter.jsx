import React, { Component } from "react";

class Counter extends Component {
  // this method can decide whether an ajax call should be made to get new data based on props and state objects
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data
    }
  }
  // opportunity to do any clean up before componenet is removed from the DOM - otherwise will end up with memory leaks
  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter = Rendered');
    return (
      <div>
        <span
          style={{ marginRight: 2 + "em", marginLeft: 1 + "em", minWidth: 3 + "em" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
        // pass reference of counter object cause it will make the implementation of the handler simpler
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
        // pass reference of counter object cause it will make the implementation of the handler simpler
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
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
