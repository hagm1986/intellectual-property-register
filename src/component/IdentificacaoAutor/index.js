import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

class IdentificacaoAutor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tipoEnt:'',
            sexo:'',
            nomeAut:'',
            tipoDoc:'',
            numDoc:'',
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
        const value = target.type ? target.checked : target.value;
        const name = target.name;
      
        console.log(value);// teste para mudanca de estado

        this.setState({ [name]: value });
        // Chama parent através do props enviado
        this.props.parentReq(this.state);
        
    }

    render() {
        return (
            <div>

                <Form>
         
                    <Form.Group controlId="exampleForm.ControlInput1" controlId="exampleForm.ControlSelect2" >
                    <Form.Row className="aling-itens-center">
                        <Col>
                 
                    <Form.Label>Tipo de Entidade </Form.Label>
                    <Form.Control as="select" value={this.state.tipoEnt} onChange={this.handleChange}>

                                    <option name="tipoEntidade" value="PS">Pessoa Singular</option>
                                    <option name="tipoEntidade" value="PC">Pessoa Coletiva</option>

                                </Form.Control>
                </Col>
                <Col>
                <Form.Label>Sexo</Form.Label>
                 <Form.Control as="select"  value={this.state.sexo} onChange={this.handleChange}>
                             <option name="masculino" value="Mas">Masculino</option>
                            <option name="feminino" value="Femi">Feminino</option>
        
                               </Form.Control>
    
                  </Col>
                  </Form.Row>
                   </Form.Group>

                        <Form.Label>Nome do autor</Form.Label>
                        <Form.Control  name="nomeAut" type="text" value={this.state.nomeAut} onChange={this.handleChange}   />
                  
                    <Form.Group controlId="exampleForm.ControlInput2" controlId="exampleForm.ControlSelect2">

                        <Form.Row className="align-items-center">
                            
                            <Col>

                                <Form.Label>Tipo do documento de identificação</Form.Label>
                                <Form.Control as="select"  value={this.state.tipoDoc} onChange={this.handleChange}>

                                    <option name="tipoDoc" value="CNI">CNI</option>
                                    <option name="tipoDoc"value="Passapoorte">Passaporte</option>

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

                                     <option name="pais"value ="CV" >Cabo Verde</option>
                                    <option name="pais" value ="AGO">Angola</option>
                                    <option name="pais" value ="EUA">Estados Unidos da America</option>
                                    <option name="pais" value ="MZ">Moçambique</option>
                                    <option name="pais" value ="PT">Portugual</option>
                                    <option name="pais" value ="NL">Holanda</option>
                                    <option name="pais" value ="FR">França</option>
                                    <option name="pais" value ="Japão">Japão</option>
                                    <option name="pais" value ="SL">Serra Leoa</option>
                                    <option name="pais" value ="JP">Japão</option>
                                    <option name="pais"value ="CN">China</option>
                                    <option name="pais"value ="RU">Russia</option>

                                </Form.Control>
                            </Col>
                        
                        </Form.Row>

                    </Form.Group> 
                    
                </Form>

            </div>
        );
    }
}

export default IdentificacaoAutor;