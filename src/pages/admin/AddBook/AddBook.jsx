import React from "react";
import styles from "./add.module.css";
import { SlArrowLeft } from "react-icons/sl";
function AddBook() {
  return (
    // Formulario para agregar libros
    <div className={styles.addbookContainer}>
      <button className={styles.btnBack}><SlArrowLeft size={10} className={styles.iconArrow} />Regresar</button>
      <h1 className={styles.title}>Agregar Libro</h1>
      <form className={styles.formBook} action="">
        <div className={styles.divOne}>
          <input type="text" placeholder="Título" />
          <input type="text" placeholder="Editorial" />
          <input type="text" placeholder="Estado" />
        </div>
        <div className={styles.divTwo}>
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Categoría" />
          <input type="text" placeholder="Stock" />
        </div>
      </form>
      <button className={styles.btnAdd}>Agregar</button>
    </div>
  );
}

export default AddBook;
