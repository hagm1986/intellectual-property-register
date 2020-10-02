import React from 'react';
import { Form } from 'react-bootstrap'

class AtividadesDesenvolver extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           checkbox:"Música" ,
           outros:"teste"

        }
    }
    changeHandler(event){
        event.preventDefault();
        console.log('state: ', this.state);
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <h1>Atividades a desenvolver</h1>
                    <h1 >Atividades artísticas</h1>
                    <p className="paragrafo">
                    Música: <input type="checkbox" className="box" />
                    Teatro: <input type="checkbox" className="box" />  
                    Karaoke: <input type="checkbox" className="box" />
                    Dança: <input type="checkbox" className="box" />
                    Tauromaquia: <input type="checkbox" className="box" />
                    Circo: <input type="checkbox" className="box" />
                   </p>
                   <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outros</Form.Label>
                        <Form.Control as="textarea" rows={3} name="outros" value={this.state.outros} onChange={(event) => {this.changeHandler(event)}}/>
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>
                    <h1>Atividades Cinematográfica</h1>
                    <p className="paragrafo">
                    Exibição: <input type="checkbox" className="box" />
                    Distribuição: <input type="checkbox" className="box" />  
                    </p>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outras</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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
                        <Form.Control as="textarea" rows={3} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default AtividadesDesenvolver;