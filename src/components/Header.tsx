interface Tasks {
  id: string,
  title: string,
  isChecked: boolean
}

interface TasksProps {
  tasks: Tasks[]
}

export function Header({ tasks }: TasksProps) {
  const tasksQuantity = tasks.length

  return (
    <div className="header-container">
      <h1>Ultimate todo list</h1>
      <span>{tasksQuantity} Tasks</span>
    </div>
  )
}