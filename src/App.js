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

    this.handleChange = this.handleChange.bind(this);
  }


  setTotalTasks(tasks) {
    console.log("This ", tasks);
    /*if (tasks) {
      this.setState({
        totalTasks: tasks.length
      });
    }*/
  }

  handleChange(e){
    console.log('e ', e);
    this.setState({enableActions : e.target.checked});
  }

  render() {
    return (
      <div className="App">
        <Navigation title="tasks" total={this.state.totalTasks}/>
        <Tasks total={this.state.totalTasks}/>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
