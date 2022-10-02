import styles from './Sobre.module.scss';
import foto from 'assets/gallery-4.jpg'

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.conteudo}>
                <img src={foto} alt="Foto" />
                <div className={styles.texto}>
                    <h2>Sobre a <span>Barbearia</span></h2>
                    <h5>Desenvolvedor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Impedit sed molestiae perspiciatis dolore? Soluta, perferendis!
                        Excepturi eveniet, molestias tempora fuga inventore sit, adipisci ipsam at ex, dolorem eos labore!
                        Doloribus!
                    </p>
                    <button type='button'>Vamos</button>
                </div>
            </div>
        </section>
    )
}