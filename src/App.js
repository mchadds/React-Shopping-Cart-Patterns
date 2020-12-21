import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from "./components/counters";
import { isCompositeComponent } from 'react-dom/test-utils';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  // Make ajax calls to get data from the server
  componentDidMount() {
    console.log('App - Mounted');
  }

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
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}/>
        </main> 
      </React.Fragment>
    
    );
  }
} 
export default App;
