import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import provincias from '../data/provincias.json';

function DetalleLp() {

  const valoresProgreso = [80, 65, 35, 45, 90, 20, 75, 60, 30, 50, 15, 40, 70, 55, 70, 60, 45, 85, 90, 50];
  const [filtro, setFiltro] = useState('');

  const getColorBarraProgreso = (progreso) => {
    if (progreso >= 80 && progreso <= 100) {
      return 'bg-success';
    } else if (progreso >= 60 && progreso <= 79) {
      return 'bg-primary';
    } else if (progreso >= 40 && progreso <= 59) {
      return 'bg-info';
    } else if (progreso >= 20 && progreso <= 39) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  };

  const provinciasLaPaz = provincias.Bolivia["La Paz"].map((provincia, index) => {
    const paddedIndex = (index + 1).toString().padStart(2, '0');
    return {
      id: `02-${paddedIndex}`,
      nombre: provincia,
      descripcion: `Descripción de ${provincia}`,
      progreso: valoresProgreso[index]
    };
  });

  const filteredData = provinciasLaPaz.filter(provincia =>
    provincia.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const columns = [
    { name: 'CÓDIGO', selector: 'id', sortable: true },
    { name: 'NOMBRE', selector: 'nombre', sortable: true },
    { name: 'DESCRIPCIÓN', selector: 'descripcion', sortable: true },
    { 
      name: 'PROGRESO', 
      cell: row => (
        <div className="progress w-100">
          <div className={`progress-bar ${getColorBarraProgreso(row.progreso)}`} 
               role="progressbar" 
               style={{width: `${row.progreso}%`}} 
               aria-valuenow={row.progreso} 
               aria-valuemin="0" 
               aria-valuemax="100">
                 {row.progreso}%
          </div>
        </div>
      )
    },
  ];

  const handleFilterChange = e => {
    setFiltro(e.target.value);
  };

  return (
    <div className="container pt-0">
      <Card>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span className="text-center">Datos de provincias del departamento de <b>La Paz-02</b></span>
          <Form.Control style={{width: '30%'}} type="text" placeholder="Buscar..." value={filtro} onChange={handleFilterChange} />
        </Card.Header>
        <Card.Body>
          <div className="table-responsive ">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              paginationComponentOptions={{ rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' }}
              fixedHeader
              fixedHeaderScrollHeight='600px'
              noDataComponent={<span>No hay datos para mostrar</span>}
              className="table table-striped"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetalleLp;