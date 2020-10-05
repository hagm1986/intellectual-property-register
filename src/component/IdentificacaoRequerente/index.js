import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

class IdentificacaoRequerente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          nome: '',
          tipoDoc:'',
          numDoc:'',
          qPedido:'',
          email:'',
          numTele:'',
          morada:'',
          codPostal:'',
          localidade:'',
          país:''
        };
    
        this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);//no caso de submitir info vou usar

      }
    
      handleChange(event) {

        const target = event.target;        
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
      
        console.log(this.state);// teste para mudanca de estado

        this.setState({ [name]: value });
        
    }

    render() {
        return (
            <div>

                <Form>

                    <Form.Group controlId="exampleForm.ControlInput1" >

                        <Form.Label>Nome do requerente</Form.Label>
                        <Form.Control  name="nome" type="text" value={this.state.nome} onChange={this.handleChange}   />

                    </Form.Group>                                     

                    <Form.Group controlId="exampleForm.ControlInput2"  controlId="exampleForm.ControlSelect2">

                        <Form.Row className="align-items-center">
                            
                            <Col>

                                <Form.Label>Tipo do documento de identificação</Form.Label>
                                <Form.Control as="select"  value={this.state.tipoDoc} onChange={this.handleChange}>

                                    <option name="tipoDoc">CNI</option>
                                    <option name="tipoDoc">Passaporte</option>

                                </Form.Control>

                            </Col>

                            <Col>

                                <Form.Label>Nº do documento de identificação</Form.Label>
                                <Form.Control  name="numDoc" type="text" value={this.state.numDoc} onChange={this.handleChange}   />
                            
                            </Col>
                        
                        </Form.Row>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2" >

                        <Form.Row className="align-items-center">
                            
                            <Col>

                                <Form.Label>E-mail</Form.Label>
                                <Form.Control  name="email" type="email" value={this.state.email} onChange={this.handleChange}  />

                            </Col>

                            <Col>

                                <Form.Label>Nº telefone / Telemovél </Form.Label>
                                <Form.Control  name="numTele" type="number" value={this.state.numtele} onChange={this.handleChange}  />
                           
                            </Col>

                        </Form.Row>

                    </Form.Group>    

                      <Form.Group controlId="exampleForm.ControlInput2" >

                        <Form.Row className="align-items-center">
                            
                            <Col>

                                <Form.Label>Morada</Form.Label>
                                <Form.Control name="morada" type="text" value={this.state.morada} onChange={this.handleChange}  />

                            </Col>

                            <Col>

                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control  name="codPostal" type="number" value={this.state.codPostal} onChange={this.handleChange}  placeholder="name " />

                            </Col>

                        </Form.Row>

                    </Form.Group> 

                     <Form.Group controlId="exampleForm.ControlInput2"  controlId="exampleForm.ControlSelect2">

                        <Form.Row className="align-items-center">
                            
                            <Col>

                                <Form.Label> Localidade </Form.Label>
                                <Form.Control  name="localidade" type="text" value={this.state.localidade} onChange={this.handleChange}   />


                            </Col>

                            <Col>

                                <Form.Label>País</Form.Label>
                                <Form.Control as="select"  value={this.state.país} onChange={this.handleChange}>

                                    <option name="país">Cabo Verde</option>
                                    <option name="país">Angola</option>
                                    <option name="país">EUA</option>
                                    <option name="país">Moçambique</option>
                                    <option name="país">Portugual</option>
                                    <option name="país">Holanda</option>
                                    <option name="país">França</option>
                                    <option name="país">Serra Leoa</option>
                                    <option name="país">Japão</option>
                                    <option name="país">China</option>
                                    <option name="país">Russia</option>

                                </Form.Control>
                            </Col>
                        
                        </Form.Row>

                    </Form.Group> 
                    
                    <Form.Group>
                        {
                            ['radio'].map((type) => (

                                <div key={`inline-${type}`}>

                                    <Form.Check  name="qPedido" inline label="O Proprio" type={type} id={`inline-${type}-1`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Editor" type={type} id={`inline-${type}-2`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Representante" type={type} id={`inline-${type}-3`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Titular Sucessivo" type={type} id={`inline-${type}-4`} value={this.state.qPedido} onChange={this.handleChange} />
                            
                                </div>
                            ))
                        }
                    </Form.Group>                    
                    
                </Form>

            </div>
        );
    }
}

export default IdentificacaoRequerente;