import { FaBars, FaRegUser, FaRegBell} from 'react-icons/fa';
import styles from './Produtos.module.scss';

export default function Produtos() {
    return (
        <section className={styles.servico}>

            <div className={styles.titulo}>
                <h2>Nossos Serviços</h2>
            </div>

            <div className={styles.box}>
                <div className={styles.card}>
                    <FaBars className={styles.icone}/>
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
                    <FaRegUser className={styles.icone}/>
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
                    <FaRegBell className={styles.icone}/>
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