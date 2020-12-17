import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // handler for when the increment button on the counter is clicked
  handleIncrement = counter => {
    // "..." is the spread operator that clones the object
    const counters = [...this.state.counters];
    // get index of incremented counter
    const index = counters.indexOf(counter);
    // spread operator to clone the counter being incremented
    counters[index] = {...counter};
    // increment value
    counters[index].value++;
    this.setState({ counters });
  };

  // handler for when the reset button at the top of the screen is clicked
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // handler for when delete button related to acounter is clicked
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters })
  };

  render() {
    return (
      <div>
        <button 
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <Counter 
          key={counter.id} 
          onDelete={this.handleDelete} 
          onIncrement={this.handleIncrement}
          counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
