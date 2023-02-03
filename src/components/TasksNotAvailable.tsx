import style from './TasksNotAvailable.module.css'
import ico from '../assets/message-ico.svg'

export function TasksNotAvailable() {
  return (
    <div className={style.message}>
      <img src={ico} alt="Icone mensagem" />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}