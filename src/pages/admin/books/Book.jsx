import React from "react";
import styles from "./book.module.css";
import DataTable from "react-data-table-component";
import { BsPlus } from "react-icons/bs";
import {Link} from "react-router-dom"

function Book() {
  

  const columnas = [
    {
      name: "Título",
      selector: (row) => row.titulo,
      sortable: true,
    },
    {
      name: "Autor",
      selector: (row) => row.autor,
      sortable: true
    },
    {
      name: "Editorial",
      selector: (row) => row.editorial,
      sortable: true
    },
    {
      name: "Categoría",
      selector: (row) => row.categoria,
      sortable: true
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
   {
      name:"Acciones",
      button: true,
      cell: () => (
        <>
          <Link to={"/updatebook"} className={styles.btnEdit}>Editar</Link>
          <button className={styles.btnDelete}>Eliminar</button>
        </>
      )
   }
   

  ];
  const data = [
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martínez",
      editorial: "Sin Fronteras",
      categoria: "Ficción Clásica",
      estado: "Nuevo",
      stock: "3",
    },
    {
      titulo: "Pensar con claridad",
      autor: "James Clear",
      editorial: "Planeta",
      categoria: "Motivación",
      estado: "Nuevo",
      stock: "4",
    },
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martínez",
      editorial: "Sin Fronteras",
      categoria: "Ficción Clásica",
      estado: "Nuevo",
      stock: "3",
    },
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martínez",
      editorial: "Sin Fronteras",
      categoria: "Ficción Clásica",
      estado: "Nuevo",
      stock: "3",
    },
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martínez",
      editorial: "Sin Fronteras",
      categoria: "Ficción Clásica",
      estado: "Nuevo",
      stock: "3",
    },
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martínez",
      editorial: "Sin Fronteras",
      categoria: "Ficción Clásica",
      estado: "Nuevo",
      stock: "3",
    },
    {
      titulo: "Corazón de Hielo",
      autor: "Jazmín Martínez",
      editorial: "Sin Fronteras",
      categoria: "Ficción Clásica",
      estado: "Nuevo",
      stock: "3",
    },
  ];
  const handleChange = ({ selectRows }) => {
    console.log("Seleccionar filas", selectRows);
  };

  return (
    <div>
      <h1 className={styles.titleBook}>Libros</h1>
      <div className={styles.container}>
      <div className={styles.btnContainer}>
      <Link to={"/addbook"} className={styles.btnAddBook}><BsPlus size={15} />Agregar Libro</Link>
      </div >
      <DataTable 
        columns={columnas}
        data={data}
        selectableRows
        onSelectedRowsChange={handleChange}
        paginationPerPage={5}
        pagination
        fixedHeader
      />
      </div>
      
    </div>
  );
}

export default Book;
