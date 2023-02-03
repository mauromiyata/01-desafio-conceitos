import style from './Header.module.css'
import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={todoLogo} alt="Logotipo do Todo" />
    </header>
  )
}