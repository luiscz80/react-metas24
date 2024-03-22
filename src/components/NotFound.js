import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <div className="container-fluid text-center" style={{ backgroundImage: 'url(/images/notfound.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
      <h2>Error 404</h2>
      <p>Lo sentimos, pero la página que estás buscando no se pudo encontrar. Parece que ha habido un error y la página que intentabas acceder no existe o ha sido eliminada.<br></br> Te recomendamos verificar la URL o regresar a la página de inicio. Si el problema persiste, por favor contáctanos para que podamos ayudarte.</p>
      <Link to="/" className="btn btn-success">
        <FontAwesomeIcon icon={faHome} /> Volver a Inicio
      </Link>
    </div>
  );
}

export default NotFound;