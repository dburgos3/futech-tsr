import React from 'react';
import Welcome from './components/Home/home';
import Header from './components/Header/Header';
import Catalogos from './components/Routes/Catalogos';
import Movimientos from './components/Routes/Movimientos';
import Perfil from './components/Routes/Perfil';
import Visualizacion from './components/Routes/Visualizacion';
import Reportes from './components/Routes/Reportes';


import futechLogo from './styles/icons/logoFutech.png';
import teseractoLogo from './styles/icons/logoteseracto.png';

import { Route, BrowserRouter, Switch } from 'react-router-dom'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Welcome fLogo={futechLogo} tLogo={teseractoLogo} />

        <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route path='/' exact component={Welcome} /> */}
            <Route path='/catalogos' exact component={Catalogos} />
            <Route path='/movimientos' exact component={Movimientos} />
            <Route path='/perfil' exact component={Perfil} />
            <Route path='/visualisacion' exact component={Visualizacion} />
            <Route path='/reportes' exact component={Reportes} />
          </Switch>
        </BrowserRouter>

      </header>
    </div>

  );
}

export default App;
