import styles from './Home.module.scss';

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.conteudo}>
                <h4>Bem vindo a</h4>
                <h1>Barbearia</h1>
                <h3>O melhor lugar para mudar seu visual</h3>
            </div>
        </section>
    )
}