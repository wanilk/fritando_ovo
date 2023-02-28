import styles from './CardList.module.css'
import Card from "../Card";
import { useState } from 'react';

export default function CardList() {

    const [receitas, setReceitas] = useState([
        
            { id:1, titulo: "Roscovo", tempoPreparo: " 25", porcoes: " 02", imagem: "imagem/roscovo.png"},
            { id:2, titulo: "Arroz com pepino", tempoPreparo: " 20", porcoes: " 1", imagem: "imagem/arrozPepino.png"},
            { id:3, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 01.png"},
            { id:4, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 02.png"},
            { id:5, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 03.png"},
            { id:6, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 04.png"},
            { id:7, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 05.png"},
            { id:8, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 06.png"},
            { id:9, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 07.png"}
          
    ]);

    return (

        <div className={styles.cardList}>
            {receitas.map(receita => (
                <Card
                    key={receita.id}
                    titulo={receita.titulo}
                    tempoPreparo={receita.tempoPreparo}
                    porcoes={receita.porcoes}
                    imagem={receita.imagem}
                    />

            ))}
        </div>
    )
}