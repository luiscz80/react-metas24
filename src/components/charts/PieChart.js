import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

import { departmentData } from '../data/data.js';

const PieChart = () => {

  const data = {
    labels: Object.keys(departmentData),
    datasets: [
      {
        label: 'Avance de Metas del Departamento',
        data: Object.values(departmentData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF5733',
          '#33FF57',
          '#5733FF',
          '#FF33EC',
          '#FF5733',
          '#33ECFF',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF5733',
          '#33FF57',
          '#5733FF',
          '#FF33EC',
          '#FF5733',
          '#33ECFF',
        ],
      },
    ],
  };

  return (
    <div className="container">
      <Card>
        <Card.Header>Gráfico de Torta</Card.Header>
        <Card.Body>
          <Pie data={data} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PieChart;
