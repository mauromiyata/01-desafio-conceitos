import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import style from './Form.module.css'

interface FormProps {
  onSubmitTask: (commnet: string) => void;
}

export function Form({ onSubmitTask }: FormProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault()

    if (newTaskText.length < 3) {
      return
    }

    onSubmitTask(newTaskText)

    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <form className={style.form} onSubmit={handleSubmitTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleNewTaskChange} value={newTaskText} />
      <button disabled={newTaskText.length < 3} type="submit">Criar <PlusCircle size={22} /></button>
    </form>
  )
}