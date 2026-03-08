import styles from './Post.module.css'

import { Comment } from "./Comment"
import { format } from "date-fns"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function Post(){

    const publishedDate = new Date('2026-03-05 20:00:00')
      const publishedDateFormatted= format(publishedDate, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
      })
      const publishedDateRelativeToNow = formatDistanceToNow
      (publishedDate, {
        locale: ptBR, 
        addSuffix: true,
      })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                    <img 
                    className={styles.avatar}
                    src="https://github.com/cmlopes78.png" 
                    alt="Foto de perfil"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Caua </strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="#">👉 jane.design/doctorcare</a></p>
            <p>  
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketsea</a>
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder="Deixe o seu comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}