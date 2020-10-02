import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AtividadesDesenvolver from "./component/AtividadesDesenvolver";

<<<<<<< HEAD
import IdentificacaoRequerente from './Component/IdentificacaoRequerente';
import IdentificacaoObra from './Component/IdentificaoObra';

=======
import IdentificacaoRequerente from './component/IdentificacaoRequerente';
 
>>>>>>> 13a202b7863ad53050ba70fe5264d52d0b075bee
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
<<<<<<< HEAD
              <Link to="/idenficacaoObra">Identificacao Obra</Link>
=======
              <Link to="/atividadesDesenvolver">Atividades a Desenvolver</Link>
>>>>>>> 13a202b7863ad53050ba70fe5264d52d0b075bee
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
<<<<<<< HEAD
          <Route path="/idenficacaoObra">
            <IdentObra />
=======
          <Route path="/atividadesDesenvolver">
            <AtivDesenvolver />
>>>>>>> 13a202b7863ad53050ba70fe5264d52d0b075bee
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

<<<<<<< HEAD
function IdentObra(){
  return<IdentificacaoObra/>;
}
=======
function AtivDesenvolver(){
  return <AtividadesDesenvolver/>;
}
>>>>>>> 13a202b7863ad53050ba70fe5264d52d0b075bee
