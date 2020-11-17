import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
    const taskList = tasks.length? (
        tasks.map(task => {
            return(
                <div className= "collection-item" key = {task.id}>
                    <h6> {task.content}</h6>
                    <div>
                    <button onClick={() => deleteTask(task.id)} className = "btn-small red lighten-1 " >Done</button>
                    </div>
                </div>
            )
        })

    ) : (
        <p className = "center flow-text">No tasks left, yaay!</p>
    )
     return(
         <div className= "tasks collection">
           {taskList}
         </div>
     )
}
export default Tasks