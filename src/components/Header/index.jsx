import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.titulo}>
            <div className={styles.header}>
                <img className={styles.header_img} src="/frigideira.svg"
                    alt="imagem de uma frigideira" />
            
            <div>
                <h1 className={styles.header_title}>Fritando ovo</h1>
                <h2 className={styles.header_subtitle}>Receitas fáceis</h2>
            </div>
            </div>
        </header>
    )
}