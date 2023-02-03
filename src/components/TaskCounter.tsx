import style from './TaskCounter.module.css'

interface TaskCounterProps {
  created: number;
  completed: number;
}
export function TaskCounter({ created, completed }: TaskCounterProps) {
  return (
    <div className={style.counter}>
      <p className={style.created}>Tarefas criadas <span>{created}</span></p>
      <p className={style.completed}>Concluídas <span>{created == 0 ? 0 : completed + ' de ' + created}</span></p>
    </div>
  );
}