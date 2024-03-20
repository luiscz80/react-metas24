import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chartConfig';

// import BASE_URL from './config';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Botones from './components/Botones';

function App() {
  return (
    <div className="App container pt-5 text-center">
      <h1>Monitoreo de Metas SPCC 2024 Bolivia</h1>
      <Botones />
      <div className="charts">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;