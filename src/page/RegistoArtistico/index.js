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
import AutenticacaoAssinatura from '../../component/AutenticacaoAssinatura';
import IdentificacaoAutor from '../../component/IdentificacaoAutor';


{/* <IdentificacaoRequerente/>
<DireitosArtisticosLiterario/>
<AutenticacaoAssinatura/> */}

class RegistoArtistico extends React.Component {
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
                    {/* <DireitosArtisticosLiterario/> */}
                </Card>
                <Card>
                    <Card.Header>Identificação Autor</Card.Header>
                    <Card.Body>
                        <IdentificacaoAutor parentReq={this.callBackReq.bind(this)}/>
                    </Card.Body>
                    {/* <DireitosArtisticosLiterario/> */}
                </Card>

                <Card>
                    <Card.Header>Autenticacão Assinatura</Card.Header>
                    <Card.Body>
                        <AutenticacaoAssinatura />
                    </Card.Body>
                    {/* <DireitosArtisticosLiterario/> */}
                </Card>
                <br/>
                <Button className="pull-right" 
                        variant="success"
                        onClick={this.submmitHandler}>Gravar</Button>
            </div>
        );
    }
}

export default RegistoArtistico;