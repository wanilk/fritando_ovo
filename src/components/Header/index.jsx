import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <img src="/frigideira.svg"
                    alt="imagem de uma frigideira" />
            </div>
            <div>
                <h1 className={styles.header_title}>Fritando ovo</h1>
                <h2 className={styles.header_subtitle}>Receitas fáceis</h2>
            </div>
        </header>
    )
}