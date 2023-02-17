import styles from "./Card.module.css"

export default function Card({ titulo, tempoPreparo, porcoes, imagem }) {

    return (
        <div className={styles.card}>
            <img src={imagem} />
            <h2 className={styles.card_title}>{titulo}</h2>
            <div className={styles.card_info}>
                <span>{tempoPreparo} minuto(s)</span>
                <span>{porcoes} pessoa(s)</span>
            </div>
        </div>
    )
}