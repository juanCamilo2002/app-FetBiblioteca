import { GrSchedule } from 'react-icons/gr'
import styles from './tablenews.module.css'

const TableNews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span>Reservaciones recientes</span>
                <GrSchedule size={25} />
            </div>
            <div className={styles.content}>
                <table>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Libro</th>
                            <th>Fecha incial</th>
                            <th>Fecha limite</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.delivered}>
                            <td >
                                <div className={styles.firstCell}>
                                    Raul Ortega
                                </div>
                            </td>
                            <td>
                                <div>
                                   Anatomia
                                </div>
                            </td>
                            <td>
                                <div>
                                    18/03/2024
                                </div>
                            </td>
                            <td>
                                <div>
                                    21/03/2024
                                </div>
                            </td>
                            <td>
                                <div className={styles.lastCell}>
                                    Entregado
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.pending}>
                            <td>
                                <div className={styles.firstCell}>
                                    Juan Alvarez
                                </div>
                            </td>
                            <td>
                                <div>
                                    c++
                                </div>
                            </td>
                            <td>
                                <div>
                                    19/03/2024
                                </div>
                            </td>
                            <td>
                                <div>
                                    22/03/2024
                                </div>
                            </td>
                            <td>
                                <div className={styles.lastCell}>
                                    Sin Entregar
                                </div>
                            </td>
                        </tr>
                       
                        <tr className={styles.delivered}>
                            <td >
                                <div className={styles.firstCell}>
                                    Camilo Ordonez
                                </div>
                            </td>
                            <td>
                                <div>
                                    Fisionomia
                                </div>
                            </td>
                            <td>
                                <div>
                                    18/03/2024
                                </div>
                            </td>
                            <td>
                                <div>
                                    23/03/2024
                                </div>
                            </td>
                            <td>
                                <div className={styles.lastCell}>
                                    Entregado
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.pending}>
                            <td>
                                <div className={styles.firstCell}>
                                    Santiago Ramos
                                </div>
                            </td>
                            <td>
                                <div>
                                    Python
                                </div>
                            </td>
                            <td>
                                <div>
                                    15/03/2024
                                </div>
                            </td>
                            <td>
                                <div>
                                    18/03/2024
                                </div>
                            </td>
                            <td>
                                <div className={styles.lastCell}>
                                    Sin entregar
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.pending}>
                            <td>
                                <div className={styles.firstCell}>
                                    el pp
                                </div>
                            </td>
                            <td>
                                <div>
                                    el pp
                                </div>
                            </td>
                            <td>
                                <div>
                                    el pp
                                </div>
                            </td>
                            <td>
                                <div>
                                    el pp
                                </div>
                            </td>
                            <td>
                                <div className={styles.lastCell}>
                                    el pp
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableNews
