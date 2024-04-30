import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';

import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

  class App extends Component {
  state = {
    items: [],
    text: ""
  }

  fetchTasks = () => {
    axios
      .get("https://personal-task-manager-41lf.onrender.com/task/")
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  addTask = () => {
    if (this.state.text.trim() !== "") { 
      const newTask = { task: this.state.text }; 
      axios
        .post("https://personal-task-manager-41lf.onrender.com/task/", newTask)
        .then((res) => {
          this.setState({ text: "" });
          this.fetchTasks();
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleAdd = () => {
    this.addTask();
  }

  handleDelete = (id) => {
    axios
      .delete(`https://personal-task-manager-41lf.onrender.com/task/${id}`)
      .then((res) => {
        this.fetchTasks();
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 mx-auto text-white shadow-lg mx-10">
              <h1 className="text-center">My Todays Task</h1>
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder=" Enter Your Task..." 
                  value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-success px-4 font-weight-bold" 
                  onClick={this.handleAdd}>Add</button>
                </div>
                <div className="container-fluid">
                  <ul className="list-unstyled row m-5">
                    {
                      this.state.items.map((value, i)=>{
                        return <Task value={value.task} key={i} id={value.id} 
                        sendData={this.handleDelete} />
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
