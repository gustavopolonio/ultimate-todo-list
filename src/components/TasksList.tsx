import { Dispatch, SetStateAction } from "react"

interface Tasks {
  id: string,
  title: string,
  isChecked: boolean
}

interface TasksProps {
  tasks: Tasks[],
  setTasks: Dispatch<SetStateAction<Tasks[]>>
}

export function TasksList({ tasks, setTasks }: TasksProps) {

  function handleInputClick(taskClicked: Tasks) {
    const newTasks = tasks.map(task => {
      if (task.id === taskClicked.id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  function handleDeleteTask(taskClicked: Tasks) {
    const newTasks = tasks.filter(task => task.id !== taskClicked.id)
    setTasks(newTasks)
  }

  return (
    <ul className="tasks-list-container">
      {tasks.map(task => {
        return(
          <li key={task.id}>
            <div className="checkbox-container">
              <input 
                type="checkbox" 
                onClick={() => handleInputClick(task)}
              />
              <p className={task.isChecked ? 'checked': ''}>{task.title}</p>
            </div>
            <button type="button" onClick={() => handleDeleteTask(task)}>X</button>
          </li>
        )
      })}
    </ul>
  )
}