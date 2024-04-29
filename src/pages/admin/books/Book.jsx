import React from "react";
import styles from "./book.module.css";
import DataTable from "react-data-table-component";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

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
      name: "Stock",
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: "Acciones",
      button: true,
      cell: () => (
        <div className={styles.btns}>
          <Link to={"/updatebook"} >
            <BiEdit size={23} className={styles.btnEdit}/>
          </Link>
          <Link >
            <RiDeleteBin6Line size={23} className={styles.btnDelete} />
          </Link>
        </div>
      ),
    },
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

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };
  return (
    <div>
      <h1 className={styles.titleBook}>Libros</h1>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <Link to={"/addbook"} className={styles.btnAddBook}>
            <BsPlus size={15} />
            Agregar Libro
          </Link>
        </div>
        <DataTable
          columns={columnas}
          data={data}
          selectableRows
          onSelectedRowsChange={handleChange}
          paginationPerPage={5}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          fixedHeader
        />
      </div>
    </div>
  );
}

export default Book;
