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
import AtividadesDesenvolver from '../../component/AtividadesDesenvolver';
import ProcessoRegisto from '../../component/ProcessoRegisto';
import Reinvidicacao from '../../component/Reinvidicacao';
import ViewFigura from '../../component/ViewFigura';


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
            dadosRequerente:null,
            dadosDesenvolver:null,
            dadosRegisto:null,
            dadosReivindicacao:null,
            dadosViewfigura:null
        }

        this.callBackReq = this.callBackReq.bind(this);
        this.callBackDev = this.callBackDev.bind(this);
        this.callBackPreg = this.callBackPreg.bind(this);
        this.callBackRei = this.callBackRei.bind(this);
        this.callBackVfig = this.callBackVfig.bind(this);

        this.submmitHandler = this.submmitHandler.bind(this);
    }
   
    callBackReq(dadosReq){
        this.setState({dadosRequerente:dadosReq});
    }
    callBackDev(dadosDev){
        this.setState({dadosDesenvolver:dadosDev});
    }
    callBackPreg(dadosPreg){
        this.setState({dadosRegisto:dadosPreg});
    }
    callBackRei(dadosRei){
        this.setState({dadosReivindicacao:dadosRei});
    }
    callBackVfig(dadosVfig){
        this.setState({dadosViewfigura:dadosVfig});
    }
    submmitHandler(){

        console.log('Acção Gravar!');
        console.log('state: ', this.state.dadosRequerente);
        console.log('state: ', this.state.dadosDesenvolver);
        console.log('state: ', this.state.dadosRegisto);
        console.log('state: ', this.state.dadosReivindicacao);
        console.log('state: ', this.state.dadosViewfigura);

         // Tenta carrega informações de um no (players)
         var reqRef = firebase.database().ref('dadosRequerente');
         var reqDev = firebase.database().ref('dadosDesenvolver');
         var reqReg = firebase.database().ref('dadosRegisto');
         var reqRei = firebase.database().ref('dadosReivindicacao');
         var reqView= firebase.database().ref('dadosViewfigura');

         // Gravação de dados
         reqRef.push(this.state.dadosRequerente);
        reqDev.push(this.state.dadosDesenvolver);
         reqReg.push(this.state.dadosRegisto);
         reqRei.push(this.state.dadosReivindicacao);
         reqView.push(this.state.dadosViewfigura);

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

                <Card>
                    <Card.Header>Actividades a Desenvolver </Card.Header>
                    <Card.Body>
                        <AtividadesDesenvolver parentDev={this.callBackDev.bind(this)}/>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header>Processo de Registo </Card.Header>
                    <Card.Body>
                        <ProcessoRegisto parentReq={this.callBackPreg.bind(this)}/>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header>Reinvidicacao </Card.Header>
                    <Card.Body>
                        <Reinvidicacao parentReq={this.callBackRei.bind(this)}/>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header>View Figura </Card.Header>
                    <Card.Body>
                        <ViewFigura parentReq={this.callBackVfig.bind(this)}/>
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