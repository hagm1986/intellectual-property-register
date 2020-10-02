import React from 'react';
import { Form } from 'react-bootstrap'
class IdentificacaoObra extends React.Component {
    render() {
        return (
            <div>
                <p>

               
                  <Form>
                    
                       <h1>Obra Coletiva</h1>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-2">
                            <Form.Check inline label="Não" type ={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Sim" type ={type} id={`inline-${type}-2`} />
                            </div>
                        ))}
                         <h1>
                            Sendo possível,deve(m) ser identificado(os) os colaborador(es) e mencionada(os) a(s) identificação(ões)
                            e respectiva(s) colaboração(ões) na obra</h1>
                             <textarea></textarea>

                        <h1> Obra derivada ou Composta </h1>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-2">
                            <Form.Check inline label="Não" type ={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Sim" type ={type} id={`inline-${type}-2`} />
                            </div>
                        ))}

                        <h1> Indique a obra ou as obras originais e o(s) respetivo(s) autor(es)/coautor(es)* </h1>
                            <textarea></textarea>
                    
                    </Form>
                </p>
            </div>

                            
                           
                           
                                
                    
                            

                                        
                                        );
         }
     }
     
     export default IdentificacaoObra;