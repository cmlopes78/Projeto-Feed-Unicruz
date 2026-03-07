import styles from './Sidebar.module.css'

export function Sidebar(){

    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://avatars.githubusercontent.com/u/127570953?v=4" alt="" />

            <div className={styles.profile}>
                <img 
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/127570953?v=4" alt="" />
                <strong>Cauã</strong>
                <span> Web Developer</span>
            </div>

            <footer>
                <a href="#"> Editar seu Perfil</a>
            </footer>
        </aside>
    )
    
}