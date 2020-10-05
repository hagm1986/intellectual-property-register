import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import IdentificacaoRequerente from './component/IdentificacaoRequerente';
import IdentificacaoObra from './component/IdentificaoObra';
import AtivDesenvolver from "./component/AtividadesDesenvolver";

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/idenficacaoRequerente">Identificacao Requerente</Link>
            </li>
            <li>
              <Link to="/atividadesDesenvolver">Atividades a Desenvolver</Link>
            </li>
            <li>
              <Link to="/idenficacaoObra">Identificacao Obra</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/idenficacaoRequerente">
            <IdentRequerente />
          </Route>
          <Route path="/atividadesDesenvolver">
            <AtivDesenvolver />
          </Route>
          <Route path="/idenficacaoObra">
            <IdentObra />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function IdentRequerente(){
    return <IdentificacaoRequerente/>;
}

function IdentObra(){
  return<IdentificacaoObra/>;
}
