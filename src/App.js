import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Tasks from './components/Tasks';
import FormTask from './components/FormTask';
import {tasks} from './tasks.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
    this.addTask = this.addTask.bind(this);
    this.getTotalTasks = this.getTotalTasks.bind(this);
  }

  getTotalTasks(total) {
    if (total) {
      this.setState({
        totalTasks : total
      });
    }
  };

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation title="tasks" newTask={this.state.newTask} total={this.state.tasks.length}/>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <FormTask onAddTask={this.addTask}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                <Tasks tasks={this.state.tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
