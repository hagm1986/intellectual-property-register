import React from 'react';
import { Form , row, Col} from 'react-bootstrap'

class AtividadesDesenvolver extends React.Component {
    constructor(props) {
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

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
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
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outras</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

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
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Outras</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <p>150 caracteres para atingir o máximo permitido</p>
                    </Form.Group>

                </Form>
            </div>
        );
    }
}

export default AtividadesDesenvolver;