import React, { Component } from "react";
import { priorities } from "../tasks.json";

class FormTask extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    getOptionsPriority() {
        return priorities.map((priority, i) => {
            return (
                <option value={priority} key={i}> {priority} </option>
            );
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTask(this.state);
    }

    render() {
        const optionsPriority = this.getOptionsPriority();
        return (
            <div className="card">
                <div className="card-header">
                    <h3> Add a new task </h3>
                </div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} 
                            name="title" className="form-control" placeholder="title" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} 
                            name="description" className="form-control" placeholder="description" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} 
                            name="responsible" className="form-control" placeholder="responsible" />
                    </div>
                    <div className="form-group">
                        <select  onChange={this.handleInput} 
                            name="priority" className="form-control" placeholder="priority">
                            {optionsPriority}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }

}

export default FormTask;