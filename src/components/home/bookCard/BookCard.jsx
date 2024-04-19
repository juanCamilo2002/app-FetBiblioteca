import styles from "./bookCard.module.css";
import { CiHeart } from "react-icons/ci";

const BookCard = () => {
    return (
        <div className={styles.card}>
            <CiHeart size={30} color="white" className={styles.heartIcon} />
            <img
                src="https://marketplace.canva.com/EAFutLMZJKs/1/0/1003w/canva-portada-libro-novela-suspenso-elegante-negro-wxuYB_sJtMw.jpg"
                alt=""
                className={styles.cover}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>La niebla de los bosques </h2>
                <p className={styles.category}>categoria: Suspenso</p>
                <p className={styles.author}>autor: J. Garcia</p>
            </div>

        </div>

    )
}

export default BookCard
