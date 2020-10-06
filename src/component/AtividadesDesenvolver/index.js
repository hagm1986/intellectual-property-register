import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
const optionList = ['Música', 'Teatro', 'Karaoke', 'Dança', 'Tauromaquia', 'Circo'];

class AtividadesDesenvolver extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkbox: null,
            act_art_outros: null,
            actividades_artisticas: null,
            act_cin_outros: null,
            act_vid_outros: null,
        }
    }
    submitHendler(){
        console('acção gravar');
    }
    componentDidMount() {
    
        // tenta carrega informações de um no (players)
        var ref = firebase.database().ref('aluno');

        console.log(ref);

        // Gravação de dados
        var playersRef = firebase.database().ref("aluno/");

        playersRef.set({
            Igor: {
                number: 1,
                age: 30
            },

            Monica: {
                number: 2,
                age: 20
            }
        });

        // Update
        var johnRef = firebase.database().ref("aluno/Monica");
        johnRef.update({
            "age": 40
        });

        // Query
        var playersRefFiltro = firebase.database().ref("aluno/");

        playersRefFiltro.orderByChild("age").on("child_added", function (data) {
            console.log(data.val().age);
        });


    }
    changeHandler(event) {
        event.preventDefault();
        console.log('state: ', this.state);
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div>
                <Form>
                    <h1>Atividades a desenvolver</h1>
                    <Form.Group controlId="exampleForm.ControlInput1">

                        <Form.Label>Atividades artísticas</Form.Label>

                        {/* <p className="paragrafo">
                    Música: <input type="checkbox" className="box" />
                    Teatro: <input type="checkbox" className="box" />  
                    Karaoke: <input type="checkbox" className="box" />
                    Dança: <input type="checkbox" className="box" />
                    Tauromaquia: <input type="checkbox" className="box" />
                    Circo: <input type="checkbox" className="box" />
                   </p> */}

                        {optionList.map((type) => (
                            <Col sm={10}>
                                <Form.Label>{type}</Form.Label>
                                <Form.Check name="actividades_artisticas" inline id={`inline-${type}-1`}
                                    value={type}
                                    onChange={(event) => { this.changeHandler(event) }} />
                            </Col>
                        ))}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outros</Form.Label>
                        <Form.Control as="textarea" rows={3} name="act_art_outros" value={this.state.outros} onChange={(event) => { this.changeHandler(event) }} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>
                    <h1>Atividades Cinematográfica</h1>
                    <p className="paragrafo">
                        Exibição: <input type="checkbox" className="box" />
                    Distribuição: <input type="checkbox" className="box" />
                    </p>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outras</Form.Label>
                        <Form.Control as="textarea" rows={3} name="act_cin_outros" onChange={(event) => { this.changeHandler(event) }} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>
                    <h1>Atividades Videográficos</h1>
                    <p className="paragrafo">
                        Edição: <input type="checkbox" className="box" />
                    Venda: <input type="checkbox" className="box" />
                    Aluguer: <input type="checkbox" className="box" />
                    Exibição: <input type="checkbox" className="box" />
                    </p>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outras</Form.Label>
                        <Form.Control as="textarea" rows={3} name="act_vid_outros" onChange={(event) => { this.changeHandler(event) }} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>
                </Form>
            </div >
        );
    }
}

export default AtividadesDesenvolver;