import React from 'react';
import { Form , row, Col} from 'react-bootstrap'


class AtividadesDesenvolver extends React.Component {
    constructor(props) {
            super(props);
            this.state = { 
                ativArt:'',
                ativArtOutras:'',
                ativCinema:'',
                ativCinemaOutros:'',
                ativVideografica:'',
                ativVideograficaOutros:'',

             };
        
            this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);//no caso de submitir info vou usar

        }
        
        handleChange(event) {

            const target =   event.target;        
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            console.log(value);
            console.log(name);
            console.log(target);

            this.setState({ [name]: value });
            
        }

    render() {
        return (
            <div>
                <Form>     
                     <Form.Label ><b>Atividades a Desenvolver</b></Form.Label>    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><b>Atividades Artisticas</b></Form.Label>    
                        <Form.Row>                  
                                <Col>
                                    <Form.Check  name="ativArt"  label="Música" type="checkbox" value="musica" onChange={this.handleChange} />
                                    <Form.Check  name="ativArt"  label="Karoké" type="checkbox" value="Karoké" onChange={this.handleChange}   />
                                    <Form.Check  name="ativArt"  label="Tauromaquis" type="checkbox" value="Tauromaquis" onChange={this.handleChange}   />
                                </Col> 
                                    
                                <Col>
                                    <Form.Check  name="ativArt"  label="Teatro" type="checkbox"  value="Teatro" onChange={this.handleChange}  />
                                    <Form.Check  name="ativArt"  label="Dança" type="checkbox" value="Dança" onChange={this.handleChange}   />
                                    <Form.Check  name="ativArt"  label="Circo" type="checkbox"   value="Circo" onChange={this.handleChange} />
                                </Col>                                        
                        </Form.Row>                  
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3}  name="ativArtOutras" value={this.state.ativArtOutras} onChange={this.handleChange} />
                        <p >150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

                     <Form.Group>
                     <Form.Label><b>Atividades Cinematográficas</b></Form.Label> 
                     <Form.Row>                  
                                <Col>
                                    <Form.Check  name="ativCinema"  label="Exibição" type="checkbox" value="Exibição" onChange={this.handleChange}  />
                                </Col> 
                                    
                                <Col>
                                    <Form.Check  name="ativCinema"  label="Distribuição" type="checkbox" value="Distribuição" onChange={this.handleChange}   />
                                </Col>                                        
                        </Form.Row>  
                     </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3} name="ativCinemaOutros" value={this.state.ativCinemaOutros} onChange={this.handleChange}  />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

                    <Form.Group>
                     <Form.Label><b>Atividades Videográficas</b></Form.Label>
                    <Form.Row>                  
                                <Col>
                                    <Form.Check  name="ativVideografica"  label="Edição" type="checkbox"  value="Edição"onChange={this.handleChange} />
                                    <Form.Check  name="ativVideografica"  label="Aluguer" type="checkbox"  value="Aluguer" onChange={this.handleChange} />
                                </Col> 
                                    
                                <Col>
                                    <Form.Check  name="ativVideografica"  label="Venda" type="checkbox" value="Venda" onChange={this.handleChange}   />
                                    <Form.Check  name="ativVideografica"  label="Exibição" type="checkbox" value="Exibição"  onChange={this.handleChange} />
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