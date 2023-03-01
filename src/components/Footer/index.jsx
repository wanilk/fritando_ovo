import Style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer  className={Style.footer}>
        <div className={Style.footer_element}>
            <img className={Style.footer_img} src="../imagem/frigideiraRodape.svg" alt="" />
        
        <div className={Style.footer_text}>
            <h1>Fritando ovo - Receitas faceis</h1>
            <h2>2022</h2>
        </div>
        </div>
        </footer>
    );
    }