import 'normalize.css'
import styles from './Header.module.scss';
import logo from 'assets/logo.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__menu}>
                <div className={styles.menu__logo}>
                    <img
                        className={styles.menu__img}
                        src={logo}
                        alt="Logo Barbearia React"
                    />
                </div>
                <ul className={styles.menu__lista}>
                    <li className={styles.menu__item}>
                        <a href="#" className={styles.menu__link}>Home</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#" className={styles.menu__link}>Serviços</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#" className={styles.menu__link}>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}