import React, { useEffect, useState } from "react";
import styles from "./book.module.css";
import DataTable from "react-data-table-component";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getBooks } from "../../../util/api";

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);

    };
    fetchBooks();
  },[]);

  console.log(books)
  const columnas = [
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Autor",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Editorial",
      selector: (row) => row.publisher,
      sortable: true,
    },
    {
      name: "Materia",
      selector: (row) => row.materia,
      sortable: true,
    },
    {
      name: "Lenguaje",
      selector: (row) => row.language,
      sortable: true,
    },
    {
      name: "Unidades",
      selector: (row) => row.unidad,
      sortable: true,
    },
    {
      name: "Acciones",
      button: true,
      cell: () => (
        <div className={styles.btns}>
          <Link to={"/updatebook"} className={styles.btnEdit} >
            <BiEdit  size={23}/>
          </Link>
          <Link className={styles.btnDelete}>
            <RiDeleteBin6Line size={23}  />
          </Link>
        </div>
      ),
    },
  ];
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
            <BsPlus size={20} />
            Agregar Libro
          </Link>
        </div>
        <DataTable
          columns={columnas}
          data={books}
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
