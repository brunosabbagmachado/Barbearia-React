import 'normalize.css'
import styles from './Navbar.module.scss';
import logo from 'assets/logo.png';

export default function Navbar() {
    return (

        <nav className={styles.menu}>
            <img
                className={styles.menu__img}
                src={logo}
                alt="Logo Barbearia React"
            />
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <a href="#">Home</a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#" >Serviços</a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>

    )
}