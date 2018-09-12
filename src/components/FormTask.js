import React, { Component } from "react";

class FormTask extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3> Add a new task </h3>
                </div>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="description" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="priority" className="form-control" placeholder="priority" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="responsible" />
                    </div>
                    <button type="button" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }

}

export default FormTask;