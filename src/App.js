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
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(numTask) {
    if ((window.confirm('Are you sure you want to delete it?'))) {
      let tasks = this.state.tasks.concat();
      this.setState({
        tasks: tasks.filter((e, i) => {
          return i !== numTask;
        })
      });
    }
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
                <Tasks tasks={this.state.tasks} onDeleteTask={this.deleteTask}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
