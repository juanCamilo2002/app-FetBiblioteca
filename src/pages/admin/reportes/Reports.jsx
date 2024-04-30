import React from "react";
import styles from "./reports.module.css";
import DataTable from "react-data-table-component";
import { IoIosArrowDown } from "react-icons/io";
function Reports() {
 
  const columns = [
    {
      name: "Título",
      selector: (row) => row.titulo,
      sortable: true,
    },
    {
      name: "Autor",
      selector: (row) => row.autor,
      sortable: true,
    },
    {
      name: "Editorial",
      selector: (row) => row.editorial,
      sortable: true,
    },
    {
      name: "Categoría",
      selector: (row) => row.categoria,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: "stock",
      selector: (row) => row.stock,
      sortable: true,
    },
  ];

  const data = [
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martinez",
      editorial: "Sin fronteras",
      categoria: "Ficción clásica",
      estado: "Nuevo",
      stock: "3",
    },
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martinez",
      editorial: "Sin fronteras",
      categoria: "Ficción clásica",
      estado: "Nuevo",
      stock: "3",
    }
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <h1 className={styles.title}>Reportes</h1>
      <div className={styles.container}>
        <div className={styles.btns}>
            <button>Relevancia<IoIosArrowDown size={16} className={styles.arrowDown} /></button>
            <button>Fecha de Carga<IoIosArrowDown size={16} className={styles.arrowDown}/></button>
            <button>Tipo<IoIosArrowDown size={16} className={styles.arrowDown}/></button>
        </div>
        <DataTable 
          columns={columns}
          data={data}
          paginationPerPage={5}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          fixedHeader
        />
         <button className= {styles.btnReport} >General Reporte</button>
      </div>
     
    </div>
  );
}

export default Reports;
