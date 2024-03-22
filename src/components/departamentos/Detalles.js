import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Botones from '../Botones';
import '../charts/ChartConfig';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

import Chuquisaca from '../detalles/DetalleChu';
import BarChartChuquisaca from '../detalles/BarChartChu';

import LaPaz from '../detalles/DetalleLp';
import BarChartLaPaz from '../detalles/BarChartLp';

import Cochabamba from '../detalles/DetalleCoch';
import BarChartCocha from '../detalles/BarChartCoch';

import Oruro from '../detalles/DetalleOr';
import BarChartOruro from '../detalles/BarChartOru';

import Potosi from '../detalles/DetallePot';
import BarChartPotosi from '../detalles/BarChartPot';

import Tarija from '../detalles/DetalleTar';
import BarChartTarija from '../detalles/BarChartTar';

import SantaCruz from '../detalles/DetalleSc';
import BarChartSc from '../detalles/BarChartSc';

import Beni from '../detalles/DetalleBen';
import BarChartBeni from '../detalles/BarChartBen';

import Pando from '../detalles/DetallePan';
import BarChartPando from '../detalles/BarChartPan';

import TituloPrincipal from '../TituloPrincipal';
import NotFound from '../NotFound';

function Detalles() {
  const { departamento } = useParams();

  // Verificar si el departamento es válido
  if (departamento) {
    const nombreDepartamento = departamento.toLowerCase();
    
    // Lista de departamentos válidos
    const departamentosValidos = ['bolivia', 'lapaz', 'oruro', 'potosi', 'chuquisaca', 'cochabamba', 'tarija', 'santacruz', 'beni', 'pando'];

    // Verificar si el departamento es válido
    if (departamentosValidos.includes(nombreDepartamento)) {
      // Renderizar vista correspondiente al departamento
      return (
        <div className="container pt-4 text-center">
          <TituloPrincipal />
          <h3>Detalles de : <b>{nombreDepartamento}</b></h3>
          <Link to="../" className="btn btn-warning mb-3">
            <FontAwesomeIcon icon={faArrowLeft} /> Volver atrás
          </Link>
          {nombreDepartamento === 'bolivia' && (
            <>
              <Botones />
              <div className="charts">
                <BarChart />
                <PieChart />
                <br />
              </div>
            </>
          )}
          {nombreDepartamento === 'chuquisaca' && (
            <div>
              <Chuquisaca />
              <br />
              <BarChartChuquisaca />
              <br />
            </div>
          )}
          {nombreDepartamento === 'lapaz' && (
            <div>
              <LaPaz />
              <br />
              <BarChartLaPaz />
              <br />
            </div>
          )}
          {nombreDepartamento === 'cochabamba' && (
            <div>
              <Cochabamba />
              <br />
              <BarChartCocha />
              <br />
            </div>
          )}
          {nombreDepartamento === 'oruro' && (
            <div>
              <Oruro />
              <br />
              <BarChartOruro />
              <br />
            </div>
          )}
          {nombreDepartamento === 'potosi' && (
            <div>
              <Potosi />
              <br />
              <BarChartPotosi />
              <br />
            </div>
          )}
          {nombreDepartamento === 'tarija' && (
            <div>
              <Tarija />
              <br />
              <BarChartTarija />
              <br />
            </div>
          )}
          {nombreDepartamento === 'santacruz' && (
            <div>
              <SantaCruz />
              <br />
              <BarChartSc />
              <br />
            </div>
          )}
          {nombreDepartamento === 'beni' && (
            <div>
              <Beni />
              <br />
              <BarChartBeni />
              <br />
            </div>
          )}
          {nombreDepartamento === 'pando' && (
            <div>
              <Pando />
              <br />
              <BarChartPando />
              <br />
            </div>
          )}
        </div>
      );
    }
  }

  return <NotFound />;
}

export default Detalles;