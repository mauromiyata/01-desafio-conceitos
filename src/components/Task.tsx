import { Trash } from 'phosphor-react'
import style from './Task.module.css'

interface TaskProps {
  content: string;
  completed: boolean;
  onDeleteTask: (content: string) => void;
  onChangeCompleted: (content: string, completed: boolean) => void;
}

export function Task({ content, completed, onDeleteTask, onChangeCompleted }: TaskProps) {
  function handleCompleted() {
    onChangeCompleted(content, !completed)
  }

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={style.task}>
      <label className={style.check}>
        <input type="checkbox" name="" id="" checked={completed} onChange={handleCompleted} />
        <span></span>
      </label>
      <p>{content}</p>
      <button title='Deletar tarefa' onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}