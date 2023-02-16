import styles from "./Card.module.css"

export default function Card({ titulo, tempoPreparo, porcoes }) {
    
    return (
        <div className={styles.card}>
            
            <h2 className={styles.card_title}>{titulo}</h2>
            <span className={styles.card_info}>{tempoPreparo} minuto(s)</span>
            <span>{porcoes} pessoa(s)</span>
        </div>
    )
}