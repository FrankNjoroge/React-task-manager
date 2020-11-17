import React, { Component } from 'react'

class AddTask extends Component {
    state = {
        content:''
    }
    handleChange= (e) => {
        this.setState({
            content: e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)
        this.setState({
          content: '' 
        })
        // e.target.reset()
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add new task</label>
                    <input onChange={this.handleChange} value = {this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTask