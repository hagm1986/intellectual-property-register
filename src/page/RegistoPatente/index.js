import React from 'react';
import { Button, Card } from 'react-bootstrap';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

import IdentificacaoRequerente from '../../component/IdentificacaoRequerente';
//import AtividadesDesenvolver from '../../component/AtividadesDesenvolver';
//import ProcessoRegisto from '../../component/ProcessoRegisto';
//import Reinvidicacao from '../../component/Reinvidicacao';
//import ViewFigura from '../../component/ViewFigura';


{/*<IdentificacaoRequerente/>
<ActividadesDesenvolver/>
<ProcessoRegisto/>
<Reinvidicacao/>
<ViewFigura/> 
 */}

class RegistoPatente extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dadosRequerente:null
        }
        this.callBackReq = this.callBackReq.bind(this);
        this.submmitHandler = this.submmitHandler.bind(this);
    }
   
    callBackReq(dadosReq){
        this.setState({dadosRequerente:dadosReq});
    }
    submmitHandler(){

        console.log('Acção Gravar!');
        console.log('state: ', this.state.dadosRequerente);

         // Tenta carrega informações de um no (players)
         var reqRef = firebase.database().ref('dadosRequerente');
         
         // Gravação de dados
         reqRef.push(this.state.dadosRequerente);


    }
    render() {
        return (
            <div className="container">
                <Card>
                    <Card.Header>Identificação Requerente</Card.Header>
                    <Card.Body>
                        <IdentificacaoRequerente parentReq={this.callBackReq.bind(this)}/>
                    </Card.Body>
                </Card>
                <br/>
                <Button className="pull-right" 
                        variant="success"
                        onClick={this.submmitHandler}>Gravar</Button>
            </div>
        );
    }
}
export default RegistoPatente;