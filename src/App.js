import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Tasks from './components/Tasks';
import FormTask from './components/FormTask';

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

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <FormTask />
            </div>

            <div className="col-md-8">
              <div className="row">
                <Tasks total={total => this.getTotalTasks(total)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
