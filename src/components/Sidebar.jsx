import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/jandersonvb.png" />
        <strong>Janderson Vilas Boas</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="http://">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}