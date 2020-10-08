import React from 'react';
import { Form, row, Col } from 'react-bootstrap'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


class AtividadesDesenvolver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ativArt: '',
            ativArtOutras: '',
            ativCinema: '',
            ativCinemaOutros: '',
            ativVideografica: '',
            ativVideograficaOutros: '',

        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);//no caso de submitir info vou usar

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
    handleChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(value);
        console.log(name);
        console.log(target);

        this.setState({ [name]: value });

        // Chama parent através do props enviado
        this.props.parentDev(this.state);

    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Label ><header><b>Atividades a Desenvolver</b></header></Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><b>Atividades Artisticas</b></Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Check name="ativArt" label="Música" type="checkbox" value="musica" onChange={this.handleChange} />
                                <Form.Check name="ativArt" label="Karoké" type="checkbox" value="Karoké" onChange={this.handleChange} />
                                <Form.Check name="ativArt" label="Tauromaquis" type="checkbox" value="Tauromaquis" onChange={this.handleChange} />
                            </Col>

                            <Col>
                                <Form.Check name="ativArt" label="Teatro" type="checkbox" value="Teatro" onChange={this.handleChange} />
                                <Form.Check name="ativArt" label="Dança" type="checkbox" value="Dança" onChange={this.handleChange} />
                                <Form.Check name="ativArt" label="Circo" type="checkbox" value="Circo" onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3} name="ativArtOutras" value={this.state.ativArtOutras} onChange={this.handleChange} />
                        <p >150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><b>Atividades Cinematográficas</b></Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Check name="ativCinema" label="Exibição" type="checkbox" value="Exibição" onChange={this.handleChange} />
                            </Col>

                            <Col>
                                <Form.Check name="ativCinema" label="Distribuição" type="checkbox" value="Distribuição" onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3} name="ativCinemaOutros" value={this.state.ativCinemaOutros} onChange={this.handleChange} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><b>Atividades Videográficas</b></Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Check name="ativVideografica" label="Edição" type="checkbox" value="Edição" onChange={this.handleChange} />
                                <Form.Check name="ativVideografica" label="Aluguer" type="checkbox" value="Aluguer" onChange={this.handleChange} />
                            </Col>

                            <Col>
                                <Form.Check name="ativVideografica" label="Venda" type="checkbox" value="Venda" onChange={this.handleChange} />
                                <Form.Check name="ativVideografica" label="Exibição" type="checkbox" value="Exibição" onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3} name='ativVideograficaOutros' value={this.state.ativVideograficaOutros} onChange={this.handleChange} />
                        <p >150 caracteres para atingir o máximo permitido</p >
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default AtividadesDesenvolver;