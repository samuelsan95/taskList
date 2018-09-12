import React, { Component } from "react";
import { tasks } from "../tasks.json"
class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
            totalTasks: 30
        };
    }

    showTasks() {
        return this.state.tasks.map((task, i) => {
            return (
                <div className="col-sm-4 col-md-4 col-lg-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{task.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {task.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{task.description}</p>
                            <p><mark>{task.responsible}</mark></p>
                        </div>
                    </div>
                </div>
            )
        });
        
    }
    render() {
        const tasksList = this.showTasks();
        return (
            <div className="container">
                <div className="row mt-4">
                    {tasksList}
                </div>
            </div>
        );
    }

}

export default Tasks;