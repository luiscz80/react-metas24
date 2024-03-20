// src/App.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { departmentData } from '../data.js';

function Botones() {

  const mostrarAlerta = (departamento, valor) => {
    Swal.fire({
      title: `Meta ${departamento}`,
      text: `Valor: ${valor} CERTIFICACIONES`,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  return (
    
    <div className="container mb-3">
        <Card>
            <Card.Header>Los 9 departamentos de Bolivia</Card.Header>
            <Card.Body>
            <div className="container" id="contenedor-botones">
                {Object.keys(departmentData).map((departamento) => (
                <Button
                    key={departamento}
                    variant="info"
                    size="lg"
                    className="m-1 text-white"
                    onClick={() => mostrarAlerta(departamento, departmentData[departamento])}
                >
                    {departamento}
                </Button>
                ))}
            </div>
            <img src="https://spcc12.netlify.app/imagenes/division.png" width="350" className="bolivia" id="mi_bolivia" alt="Bolivia" />
            </Card.Body>
        </Card>
    </div>
    
  );
}

export default Botones;
