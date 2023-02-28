import Style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={Style.footer}>
        <div className={Style.footer_content}>
            <img src="../imagem/frigideiraRodape.svg" alt="" />
        </div>
        </footer>
    );
    }