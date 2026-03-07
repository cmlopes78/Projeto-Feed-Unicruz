import { Header } from "./Componentes/Header";
import styles from './App.module.css'
import { Sidebar } from "./Componentes/Sidebar";

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Feed</main>
      </div>
    </div>
  )
}
