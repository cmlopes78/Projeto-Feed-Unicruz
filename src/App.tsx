import { Header } from "./Componentes/Header";
import { Post } from "./Componentes/Post"
import { Sidebar } from "./Componentes/Sidebar";

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/cmlopes78.png",
      name: 'Came',
      role: 'Junior Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Hello Word (hiiii)'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto'},
      { type: 'link', content: '#nlw'},
      { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2025-05-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/cmlopes78.png",
      name: 'Caua',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto'},
      { type: 'link', content: '#nlw'},
      { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2026-03-10 20:00:00')
  },
]


export function App() {


  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} 
            author={post.author} 
            content={post.content}
            publishedAt={post.publishedAt}/>
          ))}
        </main>
      </div>
    </div>
  )
}
