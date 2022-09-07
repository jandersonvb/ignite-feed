import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

import { Post } from './Post'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>Sidebar</Sidebar>
        <main>
          <Post author="John Smith" content="John Smith is the author of the post" />
          <Post author="John Doe" content="John Doe is the author of the post" />
          <Post author="Gabriel Smith" content="Gabriel Smith is the author of the post" />
        </main>
      </div>
    </div>
  )
}

