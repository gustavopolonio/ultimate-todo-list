import { useState, FormEvent, Dispatch, SetStateAction } from "react"

interface NewTask {
  title: string,
  isChecked: boolean
}

interface SearchBoxProps {
  addNewTask: (newTask: NewTask) => Promise<void>
}

export function SearchBox({ addNewTask }: SearchBoxProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  async function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    if (newTaskTitle.trim().length === 0) return

    await addNewTask({
      title: newTaskTitle,
      isChecked: false
    })

    setNewTaskTitle('')
  }

  return (
    <div className="search-box-container">
      <form onSubmit={handleAddNewTask}>
        <input
          type="text" 
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
          placeholder="What do you need to do today?" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}