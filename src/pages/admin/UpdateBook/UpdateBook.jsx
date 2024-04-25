import React from 'react'
import styles from "./update.module.css"
import { SlArrowLeft } from "react-icons/sl";
function UpdateBook() {
  return (
    // Formulario para actualizar libros
    <div className={styles.addbookContainer}>
      <button className={styles.btnBack}><SlArrowLeft size={10} className={styles.iconArrow}/>Regresar</button>
      <h1 className={styles.title}>Actualizar Libro</h1>
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
      <button className={styles.btnAdd}>Actualizar</button>
    </div>
  )
}

export default UpdateBook