import React from "react";
import styles from "./adduser.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { style } from "@mui/system";

function Adduser() {
  return (
    <div className={styles.container}>
    
      <Link to={"/admin/users"} className={styles.btnBack}>
        <SlArrowLeft size={10} className={styles.iconArrow} />
        Regresar
      </Link>
      <form action="" className={styles.formUser}>
        <h1 className={styles.title}>Agregar Usuarios</h1>
        <input type="text" placeholder="Nombre de usuario" />
        <input type="text" placeholder="Correo electrónico" />
        <input type="text" placeholder="Teléfono" />
        <button className={styles.btnAdd}>Agregar</button>
      </form>
    </div>
  );
}

export default Adduser;
