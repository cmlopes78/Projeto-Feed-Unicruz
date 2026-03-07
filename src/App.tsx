import { Header } from "./Componentes/Header";
import { Post } from "./Componentes/Post"
import { Sidebar } from "./Componentes/Sidebar";

import styles from './App.module.css'


export function App() {


  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
