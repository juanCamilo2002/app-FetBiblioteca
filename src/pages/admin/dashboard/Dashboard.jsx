import React, { useEffect, useState } from 'react'
import Kpi from '../../../components/admin/dashboard/Kpi/Kpi'
import styles from './dashboard.module.css'
import TableNews from '../../../components/admin/dashboard/TableNews/TableNews'
import { getBook, getBookMostReserv, getCountBooksRegister, getReservasCountMonth } from '../../../util/api'
import { FiBook } from 'react-icons/fi'
import { GiBookshelf } from "react-icons/gi";
import { HiOutlineSaveAs } from 'react-icons/hi'

const Dashboard = () => {
    const [libro, setLibro] = useState("");
    const [reservasStats, setReservasStats] = useState(0);
    const [totalLibro, setTotalLibro] = useState(0);

    useEffect(() => {
        const fetchReservasStats = async () => {
            const data = await getReservasCountMonth();
            setReservasStats(data.cantidadReservas);
        };

        const fetchTotalLibro = async () => {
            const data = await getCountBooksRegister();
            setTotalLibro(data.cantidadLibros);
        };

        const fetchBookMostReserv = async () => {
            const data = await getBookMostReserv();
            setLibro(data.title ? data.title : "No hay libros reservados");
        }

        fetchReservasStats();
        fetchTotalLibro();
        fetchBookMostReserv();
    }, []);

    const stats = [
        {
            stat: reservasStats,
            name: "Reservas",
            label: "Reservas en el mes",
            icon: <HiOutlineSaveAs size={25} />
        },
        {
            stat: totalLibro,
            name: "Libros",
            label: "Libros registrados",
            icon: <GiBookshelf size={25} />
        },
        {
            stat: libro,
            name: "Libro",
            label: "Libro más reservado",
            icon: <FiBook size={25} />
        }
    ];

    console.log({ reservasStats, totalLibro, libro });
    return (
        <div>
            <h2 className={styles.title}>Estadisticas</h2>
            <div className={styles.top}>
                {stats.map((stat, index) => (
                    <Kpi key={index} stat={stat.stat} name={stat.name} label={stat.label} icon={stat.icon} />
                ))}
            </div>
            <h2 className={styles.title}>Novedades</h2>
            <TableNews />
        </div>
    )
}

export default Dashboard
