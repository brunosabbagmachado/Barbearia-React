import 'normalize.css'
import styles from './Navbar.module.scss';
import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';



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
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.menu__item}>
                    <Link to='/empresa'>Empresa</Link>
                </li>
                <li className={styles.menu__item}>
                    <Link to='/Contato'>Contato</Link>
                </li>
            </ul>


        </nav>

    )
}