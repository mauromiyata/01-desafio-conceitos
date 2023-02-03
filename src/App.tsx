import { useState } from 'react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskCounter } from './components/TaskCounter'
import { TasksNotAvailable } from './components/TasksNotAvailable'
import './global.css'

function App() {
  const [tasks, setTasks] = useState<any[]>([]);

  function createNewTask(newTask: string) {
    setTasks([...tasks, { content: newTask, completed: false }])
  }

  function deleteTask(content: string) {
    setTasks(tasks.filter(task => task.content != content))
  }

  function changeCompleted(content: string, completed: boolean) {
    setTasks(tasks.map(task => {
      if (task.content! == content) {
        task.completed = completed
      }

      return task
    }))
  }

  function Tasks(tasks: any[]) {
    return (
      tasks.map((task) => {
        const { content, completed } = task
        return (
          <Task
            key={content}
            content={content}
            completed={completed}
            onDeleteTask={deleteTask}
            onChangeCompleted={changeCompleted}
          />
        )
      })
    )
  }

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Form onSubmitTask={createNewTask} />

        <TaskCounter created={tasks.length} completed={tasks.filter(task => task.completed).length} />

        {tasks.length > 0 ? Tasks(tasks) : <TasksNotAvailable />}

      </div>
    </div>
  )
}

export default App
