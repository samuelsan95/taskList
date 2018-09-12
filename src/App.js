import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Tasks from './components/Tasks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalTasks : 0
    }
  }

  getTotalTasks(total) {
    if (total) {
      this.setState({
        totalTasks : total
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation title="tasks" total={this.state.totalTasks}/>
        <Tasks total={total => this.getTotalTasks(total)} />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
