import React from "react";
import styles from "./user.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
function User() {
  const columnas = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Correo Electrónico",
      selector: (row) => row.correo,
      sortable: true,
    },
    {
      name: "Teléfono",
      selector: (row) => row.telefono,
      sortable: true,
    },
    {
      name: "Acciones",
      button: true,
      cell: () => (
        <div className={styles.btns}>
          <Link>
            <BiEdit size={23} className={styles.btnEdit} />
          </Link>
          <Link>
            <RiDeleteBin6Line size={23} className={styles.btnDelete} />
          </Link>
        </div>
      ),
    },
  ];
  const data = [
    {
      nombre: "Joan Sebastian Salcedo Galindo",
      correo: "joan_salcedoga@fet.edu.co",
      telefono: "3115312202",
    },
    {
      nombre: "Juan Camilo Ordoñez Morea",
      correo: "juan_ordonezmo@fet.edu.co",
      telefono: "3125352302",
    },
    {
      nombre: "Brahian Stid Rojas Castillo",
      correo: "brahian_rojasca@fet.edu.co",
      telefono: "3205312452",
    },
    {
      nombre: "Juan José Ramos Díaz",
      correo: "juan_ramosdi@fet.edu.co",
      telefono: "3184451832",
    },

    {
      nombre: "Juan Pablo Hernández Cadena",
      correo: "juan_hernandezca@fet.edu.co",
      telefono: "3153432103",
    },
  ];
  const handleChange = ({ selectRows }) => {
    console.log("Seleccionar filas", selectRows);
  };

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <h1 className={styles.titleBook}>Usuarios</h1>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <Link className={styles.btnAddUser}>
            <BsPlus size={20} />
            Agregar Usuario
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

export default User;
