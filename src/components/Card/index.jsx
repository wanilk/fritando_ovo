import styles from "./Card.module.css"

export default function Card({ titulo, tempoPreparo, porcoes, imagem,}) {

    return (
        <div className={styles.card}>
            <div className={styles.card_img_title}>
            <img className={styles.card_img} src={imagem} />
            <div>
            <h2 className={styles.card_title}>{titulo}</h2>
            </div>
            </div>
           
            <div>
            <div className={styles.complete_card_info}>
                <img src="../imagem/time 1.svg" alt="" />
                <span className={styles.card_info}>{tempoPreparo} minuto(s)</span>
            </div>
            
            <div className={styles.complete_card_info}>
                <img src="../imagem/pot-of-food 1.svg" alt="" />
                <span className={styles.card_info}>{porcoes} pessoa(s)</span>
            </div>

            </div>
        </div>
    )
}