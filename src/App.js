import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Departamentos from './components/departamentos/Departamentos';
import Detalles from './components/departamentos/Detalles';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#87CEEB', minHeight: '100vh' }}>
        <Switch>
          <Route exact path="/" component={Departamentos} />
          <Route path="/:departamento" component={Detalles} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;