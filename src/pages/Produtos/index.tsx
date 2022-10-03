import styles from './Produtos.module.scss';

export default function Produtos() {
    return (
        <section className={styles.servico}>

            <div className={styles.titulo}>
                <h2>Nossos Servicos</h2>
            </div>

            <div className={styles.box}>
                <div className={styles.card}>
                    <i className={styles.fas fa-bars}></i>
                </div>
            </div>

        </section>
    )
}