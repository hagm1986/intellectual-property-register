import React from 'react';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

class ListaPropriedade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requerentes: []        
        };
     
        this.onDataChange = this.onDataChange.bind(this);
      }    

    componentDidMount() {    

        var playersRef = firebase.database().ref("dadosRequerente/");


        playersRef.orderByChild("nome"+"localidade"+"email").on("value", this.onDataChange);         

    
    }
    
    onDataChange(items) {

        let _requerentes = [];

        items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _requerentes.push({
            key: key,
            nome: data.nome,
            localidade: data.localidade,
            email: data.email,
        });
        });
        this.setState({
            requerentes: _requerentes,
          });

       // console.log(_requerentes);  
    }

    render() {
        return (
            <div className="container" >
                 <ul>
                    {this.state.requerentes.map(function(req, index){
                        return (
                            <>
                            <li key={ index }>{req.nome}</li>
                            <li key={ index }>{req.localidade}</li>
                            <li key={ index }>{req.email}</li>
                            <p></p>
                          
                            </>
                        )
                        
                    })}
                </ul>
                
            </div>
        );
    }
}

export default ListaPropriedade;