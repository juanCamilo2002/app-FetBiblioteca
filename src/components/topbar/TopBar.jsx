import logoSmall from '../../assets/logo-small.png';
import styles from './topbar.module.css';
import { FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import NavBar from '../navbar/NavBar';

const TopBar = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.topContainer}>
                <img src={logoSmall} alt="logo-small" className={styles.logo} />
                <div className={styles.searchContainer}>
                    <input type="text" className={styles.input} placeholder="Buscar un libro..." />
                    <button className={styles.button}>
                        <CiSearch />
                    </button>
                </div>

                <div className={styles.savedContainer}>
                    <FiHeart size={20} />
                    <div className={styles.savedContainerCount}>
                        <span>0</span>
                    </div>
                    <a href="" className={styles.btnSesion}>Entrar</a>
                </div>

            </div>
            <NavBar/>
        </div>
    )
}

export default TopBar
