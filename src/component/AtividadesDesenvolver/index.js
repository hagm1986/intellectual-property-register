import React from 'react';
import { Form , row, Col} from 'react-bootstrap'

class AtividadesDesenvolver extends React.Component {
    constructor(props) {
<<<<<<< HEAD
        super(props);
        this.state = {
         
          qPedido:''

        };
    
        this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);//no caso de submitir info vou usar

      }
    
      handleChange(event) {

        const target = event.target;        
        const value = target.type === 'CheckBox' ? target.checked : target.value;
        const name = target.name;
        
        console.log(value);
        console.log(name);
        console.log(target)
        
        this.setState({ [name]: value });
        
    }
=======
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
>>>>>>> a6f15453b7d57aac5f15897227fa3679eb71f1a2

    render() {
        return (
            <div>
                <Form>
                <Form.Label ><header><b>Atividades a Desenvolver</b></header></Form.Label>    
                    <Form.Group controlId="exampleForm.ControlInput1">
<<<<<<< HEAD
                    <Form.Label>Atividade Artistica</Form.Label>

                    <Form.Row>                       

                   
                        <Col>
                        
                            <Form.Check  name="qPedido"  label="Música" type="CheckBox" value="musica" onChange={this.handleChange}  />
                           
                         </Col> 
                            
                        <Col>
                            <Form.Check  name="qPedido"  label="Danca" type="CheckBox"  value="danca" onChange={this.handleChange}  />
                            
                        </Col>  
                                
                                         
                    </Form.Row>
                       
                        
                    </Form.Group>
                     <Form.Group>
                        {
                                ['radio'].map((type) => (

                                    <div key={`inline-${type}`}>
                                    
                                        <Form.Check  name="qPedido" inline label="Exibição" type={type}  value="Exibição" onChange={this.handleChange} />
                                        <Form.Check  name="qPedido" inline label="Distribuição" type={type}  value="Distribuição" onChange={this.handleChange} />
                                
                                    </div>
                                ))
                        }
                     </Form.Group>
=======
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

>>>>>>> a6f15453b7d57aac5f15897227fa3679eb71f1a2
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3}  name="ativArtOutras" value={this.state.ativArtOutras} onChange={this.handleChange} />
                        <p >150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

<<<<<<< HEAD
                    <Form.Group>
                        
                        {
                            ['radio'].map((type) => (

                                <div key={`inline-${type}`}>

                                    <Form.Check  name="qPedido" inline label="Edição" type={type} id={`inline-${type}-1`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Venda" type={type} id={`inline-${type}-2`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Aluguer" type={type} id={`inline-${type}-3`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Exibição" type={type} id={`inline-${type}-4`} value={this.state.qPedido} onChange={this.handleChange} />
                            
                                </div>
                            ))
                        }
                    </Form.Group>      
=======
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
>>>>>>> a6f15453b7d57aac5f15897227fa3679eb71f1a2
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Outras</b></Form.Label>
                        <Form.Control as="textarea" rows={3} name="ativCinemaOutros" value={this.state.ativCinemaOutros} onChange={this.handleChange}  />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

<<<<<<< HEAD
=======
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
                        <p>150 caracteres para atingir o máximo permitido</p >
                    </Form.Group>
>>>>>>> a6f15453b7d57aac5f15897227fa3679eb71f1a2
                </Form>
            </div>
        );
    }
}

export default AtividadesDesenvolver;