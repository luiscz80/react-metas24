import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

import provincias from '../data/provincias.json';

const BarChartBeni = () => {

  const valoresBeni = [55, 82, 60, 45, 50, 15, 25, 70];

  const provinciasBeni = provincias.Bolivia["Beni"];

  const data = {
    labels: provinciasBeni,
    datasets: [
      {
        label: 'Avance de Metas ',
        data: valoresBeni,
        backgroundColor: [
          'rgba(255, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(128, 128, 128, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 0, 255, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mb-3">
      <Card>
        <Card.Header>Gráfico de Barras de provincias del departamento de <b>Beni-08</b></Card.Header>
        <Card.Body>
          <Bar data={data} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default BarChartBeni;