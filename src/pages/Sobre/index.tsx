import styles from './Sobre.module.scss';
import foto from 'assets/gallery-4.jpg';
import { Link } from 'react-router-dom';

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.conteudo}>
                <img src={foto} alt="Foto" />
                <div className={styles.texto}>
                    <h2>Sobre a <span>Barbearia</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Impedit sed molestiae perspiciatis dolore? Soluta, perferendis!
                        Excepturi eveniet, molestias tempora fuga inventore sit, adipisci ipsam at ex, dolorem eos labore!
                        Doloribus!
                    </p>
                    
                    <button
                        className={styles.botao}
                        type='button'>
                        <Link to='./produtos'>Produtos</Link>
                    </button>

                </div>
            </div>
        </section>
    )
}