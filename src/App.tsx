import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { SearchBox } from './components/SearchBox'
import { TasksList } from './components/TasksList'
import { api } from './services/api'

import './styles/global.scss'
import './styles/main.scss'

interface Tasks {
  id: string,
  title: string,
  isChecked: boolean
}

type NewTaks = Omit<Tasks, 'id'>

export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])

  useEffect(() => {
    api.get('tasks')
      .then(response => setTasks(response.data.tasks))
  }, [])

  async function handleAddNewTask(newTask: NewTaks) {
    const response = await api.post('tasks', newTask)
    setTasks([...tasks, response.data.task])
  }

  return (
    <div className="container">
      <Header tasks={tasks} />
      <SearchBox addNewTask={handleAddNewTask} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  ) 
}