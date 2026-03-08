import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

export function Comment(){
    return(
        <div className={styles.comment}>

            <Avatar src="https://github.com/cthaiur.png"
            hasBorder={false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong> Caua</strong>
                        <time title="1 hora atrás" dateTime="2026-03-01 20:00:00">
                            Publicado há 1h
                        </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom! Parabéns pelo Projeto!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}