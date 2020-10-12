import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './page';
import IdentificacaoRequerente from './component/IdentificacaoRequerente';
import IdentificacaoObra from './component/IdentificaoObra';
import IdentificacaoAutor from './component/IdentificacaoAutor';
import AtivDesenvolver from "./component/AtividadesDesenvolver";
import ListaPropriedade from "./component/ListaPropriedade";

import RegistoArtistico from "./page/RegistoArtistico";
import RegistoPatente from "./page/RegistoPatente";


export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/RegistoArtistico">Página Registo de Obras Literárias, 
              Artísticas e Científicas</Link>
            </li>
            <li>
              <Link to="/RegistoPatente">Página Registo de Patente, 
              Desenho Industrial e Propriedade Industrial </Link>
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
            <li>
              <Link to="/idenficacaoAutor">Identificacao Autor</Link>
            </li>
            <li>
              <Link to="/listaPropriedade">Lista de propriedades intelectual</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        <Route path="/">
            <Home />
          </Route>

         {/*  Página registo direitos Artísticas */}
          <Route path="/RegistoArtistico">
            <RegistoArtistico />
          </Route>
          {/*  Página registo Patente, estava em falta */}
          <Route path="/RegistoPatente">
            <RegistoPatente />
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
          <Route path="/idenficacaoAutor">
            <IdentAutor />
          </Route>
          <Route path="/listaPropriedade">
            <ListPropriedade />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

function IdentRequerente(){
    return <IdentificacaoRequerente/>;
}

 
function IdentObra(){
  return<IdentificacaoObra/>;
}
function IdentAutor(){
  return<IdentificacaoAutor/>;
}

function ListPropriedade(){
    return <ListaPropriedade/>;
}
