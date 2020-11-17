import React, { Component } from 'react';
import Tasks from './Tasks'
import AddTask from './AddTask'

class App extends Component {
  state = {
    tasks: [
      {id: 1, content: 'Add some task to tend to'},
      // {id: 2, content: 'eat some cake'}
    ]
  }
  deleteTask = (id) =>{
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })
    this.setState({
      tasks
    })
  }
  addTask = (task) => {
    task.id = Math.random()
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
  }
  render(){
    return (
      <div className="todo-app container">
            <h1 className = "center blue-text">Task Manager</h1>
            <Tasks deleteTask = {this.deleteTask} tasks = {this.state.tasks} />
            <AddTask addTask = {this.addTask} />
      </div>
    );
  }
 
}

export default App;
