import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import TituloPrincipal from '../TituloPrincipal'

import '../../styles.css';

function Departamentos() {

  return (
    <div className="container pt-4 text-center">
        <TituloPrincipal />
        <Card>
            <Card.Header>Bolivia y los 9 departamentos</Card.Header>
            <Card.Body>
            <div className="container" id="contenedor-botones">
                <Link to="/bolivia" className="bolivia">
                    <div className="image-container">
                    <img src="/images/bolivia.png" alt="Bolivia" className='pais' />
                    <b className='text-dep'>BOLIVIA</b>
                    </div>
                </Link>
                <br />
                <Link to="/chuquisaca" className="chuquisaca">
                    <div className="image-container">
                    <img src="/images/svg/chuquisaca.svg" alt="Chuquisaca" />
                    <b className='text-dep'>Chuquisaca-01</b>
                    </div>
                </Link>
                <Link to="/lapaz" className="lapaz">
                    <div className="image-container">
                    <img src="/images/svg/la_paz.svg" alt="La Paz" />
                    <b className='text-dep'>La Paz-02</b>
                    </div>
                </Link>
                <Link to="/cochabamba" className="cochabamba">
                    <div className="image-container">
                    <img src="/images/svg/cochabamba.svg" alt="Cochabamba" />
                    <b className='text-dep'>Cochabamba-03</b>
                    </div>
                </Link>
                <Link to="/oruro" className="oruro">
                    <div className="image-container">
                    <img src="/images/svg/oruro.svg" alt="Oruro" />
                    <b className='text-dep'>Oruro-04</b>
                    </div>
                </Link>
                <Link to="/potosi" className="potosi">
                    <div className="image-container">
                    <img src="/images/svg/potosi.svg" alt="Potosi" />
                    <b className='text-dep'>Potosi-05</b>
                    </div>
                </Link>
                <Link to="/tarija" className="tarija">
                    <div className="image-container">
                    <img src="/images/svg/tarija.svg" alt="Tarija" />
                    <b className='text-dep'>Tarija-06</b>
                    </div>
                </Link>
                <Link to="/santacruz" className="santacruz">
                    <div className="image-container">
                    <img src="/images/svg/santa_cruz.svg" alt="Santa Cruz" />
                    <b className='text-dep'>Santa Cruz-07</b>
                    </div>
                </Link>
                <Link to="/beni" className="beni">
                    <div className="image-container">
                    <img src="/images/svg/beni.svg" alt="Beni" />
                    <b className='text-dep'>Beni-08</b>
                    </div>
                </Link>
                <Link to="/pando" className="pando">
                    <div className="image-container">
                    <img src="/images/svg/pando.svg" alt="Pando" />
                    <b className='text-dep'>Pando-09</b>
                    </div>
                </Link>
            </div>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Departamentos;