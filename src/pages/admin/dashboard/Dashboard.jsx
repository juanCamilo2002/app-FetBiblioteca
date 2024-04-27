import React from 'react'
import Kpi from '../../../components/admin/dashboard/Kpi/Kpi'
import styles from './dashboard.module.css'
import TableNews from '../../../components/admin/dashboard/TableNews/TableNews'

const Dashboard = () => {
    return (
        <div>
            <h2 className={styles.title}>Estadisticas</h2>
            <div className={styles.top}>
                <Kpi />
                <Kpi />
                <Kpi />
            </div>
            <h2 className={styles.title}>Novedades</h2>
            <TableNews />
        </div>
    )
}

export default Dashboard
