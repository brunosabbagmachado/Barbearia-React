import styles from './Contato.module.scss';

export default function Contato(){
    return(
        <section className={styles.contato}>
            <p>Vamos agendar sua transformação.</p>
            <a href="#" className={styles.botao}>Agenda</a>
        </section>
    )
}