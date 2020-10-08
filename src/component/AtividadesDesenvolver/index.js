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
            ativArtMusica: '',
            ativArtKaroke: '',
            ativArtTauromaquis: '',

            ativArtTeatro: '',
            ativArtDanc: '',
            ativArtCirco: '',

            ativArtOutras: '',
            ativCinemaExibicao: '',
            ativCinemaDistribuicao: '',
            ativCinemaOutros: '',

            ativVideograficaEdicao: '',
            ativVideograficaAluguer: '',
            ativVideograficaVenda: '',
            ativVideograficaExibicao: '',

            ativVideograficaOutros: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }
   
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
        console.log('state: ', this.state);

    }

    handleCheckBox(event) {
       const target = event.target;

        console.log('checked?: ', target.checked);
        const value = target.value;
        const name = target.name;
        console.log('name: ', name);
        console.log('value: ', value);
        if(target.checked)
        this.setState({ [name]: value });
        else
        this.setState({ [name]: '' });
        console.log('state: ', this.state);

        // Chama parent através do props enviado
        this.props.parentDev(this.state);

    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><b>Atividades Artisticas</b></Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Check name="ativArtMusica" label="Música" type="checkbox" defaultValue="musica" onChange={this.handleCheckBox} />
                                <Form.Check name="ativArtKaroke" label="Karoké" type="checkbox" value="Karoké" onChange={this.handleChange} />
                                <Form.Check name="ativArtTauromaquis" label="Tauromaquis" type="checkbox" value="Tauromaquis" onChange={this.handleChange} />
                            </Col>

                            <Col>
                                <Form.Check name="ativArtTeatro" label="Teatro" type="checkbox" value="Teatro" onChange={this.handleChange} />
                                <Form.Check name="ativArtDanc" label="Dança" type="checkbox" value="Dança" onChange={this.handleChange} />
                                <Form.Check name="ativArtCirco" label="Circo" type="checkbox" value="Circo" onChange={this.handleChange} />
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
                                <Form.Check name="ativCinemaExibicao" label="Exibição" type="checkbox" value="Exibição" onChange={this.handleChange} />
                            </Col>

                            <Col>
                                <Form.Check name="ativCinemaDistribuicao" label="Distribuição" type="checkbox" value="Distribuição" onChange={this.handleChange} />
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
                                <Form.Check name="ativVideograficaEdicao" label="Edição" type="checkbox" value="Edição" onChange={this.handleChange} />
                                <Form.Check name="ativVideograficaAluguer" label="Aluguer" type="checkbox" value="Aluguer" onChange={this.handleChange} />
                            </Col>

                            <Col>
                                <Form.Check name="ativVideograficaVenda" label="Venda" type="checkbox" value="Venda" onChange={this.handleChange} />
                                <Form.Check name="ativVideograficaExibicao" label="Exibição" type="checkbox" value="Exibição" onChange={this.handleChange} />
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