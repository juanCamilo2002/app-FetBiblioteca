import React from "react";
import styles from "./viewbook.module.css";
import TopBar from "../../components/topbar/TopBar.jsx";
import { FaRegHeart } from "react-icons/fa";

function ViewBook() {
  return (
    <div>
      <TopBar />
      <div className={styles.container}>
        <div className={styles.book}>
          <img
            className={styles.img}
            src="https://marketplace.canva.com/EAFutLMZJKs/1/0/1003w/canva-portada-libro-novela-suspenso-elegante-negro-wxuYB_sJtMw.jpg"
          />
          <button type="text" className={styles.button}>
            Reservar
          </button>
        </div>
        <div className={styles.detail}>
          <h1 className={styles.title}>Sinopsis</h1>
          <p className={styles.description}>
            Cruce de caminos, una novela de realismo mágico de la autora
            colombiana Naira Gamboa, narra la historia de Juana, una joven con
            la habilidad de ver espíritus, y su viaje de autodescubrimiento
            junto a Alejo, un misterioso hombre con poderes similares.
          </p>

          <div className={styles.textDetail}>
            <h1 className={styles.title}>Autor:</h1>
            <p>Naira Gamboa</p>
          </div>
          <div className={styles.textDetail}>
            <h1 className={styles.title}>Fecha de publicación:</h1>
            <p>1999</p>
          </div>
          <div className={styles.textDetail}>
            <h1 className={styles.title}>Género:</h1>
            <p>Realismo mágico, Ficción</p>
          </div>
          <div className={styles.textDetail}>
            <h1 className={styles.title}>Páginas:</h1>
            <p>100</p>
          </div>
          <div className={styles.textDetail}>
            <h1 className={styles.title}>Editorial:</h1>
            <p>No se sabe</p>
          </div>

          <a className={styles.favorite}>
            Añadir a la lista
            <FaRegHeart size={25} className={styles.iconHeart} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
