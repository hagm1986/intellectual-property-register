import React from 'react';
import { Form } from 'react-bootstrap'

const optionList = ['Música', 'Teatro', 'Karaoke', 'Dança', 'Tauromaquia', 'Circo'];

class AtividadesDesenvolver extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkbox: null,
            act_art_outros: null,
            actividades_artisticas:null,
            act_cin_outros:null,
            act_vid_outros:null,
        }
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
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>{type}</Form.Label>
                                <Form.Check name="actividades_artisticas" inline id={`inline-${type}-1`} 
                                value={type}
                                onChange={(event) => { this.changeHandler(event) }}/>

                            </div>
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
                        <Form.Control as="textarea" rows={3} name="act_cin_outros" onChange={(event) => { this.changeHandler(event) }}/>
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
                        <Form.Control as="textarea" rows={3} name="act_vid_outros" onChange={(event) => { this.changeHandler(event) }}/>
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>
                </Form>
            </div >
        );
    }
}

export default AtividadesDesenvolver;