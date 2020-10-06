import React from 'react';
import { Form } from 'react-bootstrap'
class IdentificacaoObra extends React.Component {
 
     
    constructor(props) {
        super(props);
        this.state = {
         nome: '',
         pedido:'',
         outro:'',
        qPedido:'',
         
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

                        <Form.Label>Obra Coletiva</Form.Label>

                    </Form.Group>                                     
                    <Form.Group>
                        {
                            ['radio'].map((type) => (

                                <div key={`inline-${type}`}>

                                    <Form.Check  name="qPedido" inline label="Não" type={type} id={`inline-${type}-1`} value={this.state.qPedido} onChange={this.handleChange} />
                                    <Form.Check  name="qPedido" inline label="Sim" type={type} id={`inline-${type}-2`} value={this.state.qPedido} onChange={this.handleChange} />
                                    
                            
                                </div>
                            ))
                        }
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >

                        <Form.Label>Sendo possível,deve(m) ser identificado(os) os colaborador(es) e mencionada(os) a(s) identificação(ões)
                            e respectiva(s) colaboração(ões) na obra</Form.Label>
                        <Form.Control as="textarea" rows={3} name="nome" value={this.state.nome} onChange= {this.handleChange}     />

                    </Form.Group>

                     <Form.Group controlId="exampleForm.ControlInput1" >


                    <Form.Label>Obra derivada ou Composta</Form.Label>

                    </Form.Group> 

                    
                                                        
                    <Form.Group>
                    {
                        ['radio'].map((type) => (

                            <div key={`inline-${type}`}>

                                <Form.Check  name="Pedido" inline label="Não" type={type} id={`inline-${type}-1`} value={this.state.Pedido} onChange={this.handleChange} />
                                <Form.Check  name="Pedido" inline label="Sim" type={type} id={`inline-${type}-2`} value={this.state.Pedido} onChange={this.handleChange} />
                                
                        
                            </div>
                        ))
                    }
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >

                    <Form.Label>Indique a obra ou as obras originais e o(s) respetivo(s) autor(es)/coautor(es)*</Form.Label>
                    <Form.Control as="textarea" rows={3} name="outro" value={this.state.outro} onChange= {this.handleChange}     />

                    </Form.Group>

                    
                </Form>

            </div>
        );
    }
}

export default IdentificacaoObra;