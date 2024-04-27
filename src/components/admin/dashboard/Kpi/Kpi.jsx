import styles from './kpi.module.css'
import { FiBook } from 'react-icons/fi'

const Kpi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>Libros</span>
        <div className={styles.icon}>
          <FiBook size={25} />
        </div>
      </div>
      <div className={styles.center}>
        <span>2500</span>
      </div>
      <div className={styles.bottom}>
        <span>Registrados de este mes </span>
      </div>
    </div>
  )
}

export default Kpi
