import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';
import styles from './Produtos.module.scss';

export default function Produtos() {
    return (
        <section className={styles.servico}>

            <div className={styles.titulo}>
                <h2>Nossos Serviços</h2>
            </div>

            <div className={styles.box}>
                <div className={styles.card}>
                    <FontAwesomeIcon icon={faBars} className={styles.icone}/>
                    <h5>Web Development</h5>
                    <div className={styles.descricao}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Voluptatem, nemo voluptas perferendis earum officia assumenda
                        </p>

                        <p className={styles.botao__p}>
                            <a href="#" className={styles.botao__a}>Read More</a>
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <FontAwesomeIcon icon={faUser} className={styles.icone}/>
                    <h5>Web Development</h5>
                    <div className={styles.descricao}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Voluptatem, nemo voluptas perferendis earum officia assumenda
                        </p>

                        <p className={styles.botao__p}>
                            <a href="#" className={styles.botao__a}>Read More</a>
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <FontAwesomeIcon icon={faBell} className={styles.icone}/>
                    <h5>Web Development</h5>
                    <div className={styles.descricao}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Voluptatem, nemo voluptas perferendis earum officia assumenda
                        </p>

                        <p className={styles.botao__p}>
                            <a href="#" className={styles.botao__a}>Read More</a>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}