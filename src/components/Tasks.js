import React, { Component } from "react";

class Tasks extends Component {

    showTasks(tasks) {
        console.log('Tasks ', tasks);
        return tasks.map((task, i) => {
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
        const tasksList = this.showTasks(this.props.tasks);
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