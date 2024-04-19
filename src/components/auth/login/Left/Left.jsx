import styles from './left.module.css'
import { FaUserCircle } from "react-icons/fa";
const Left = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <FaUserCircle size={150} className={styles.iconUser}/>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <input
          className={styles.input}
          type="email"
          placeholder="Correo electronico"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Contraseña"
        />
        <button className={styles.button}>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Left
