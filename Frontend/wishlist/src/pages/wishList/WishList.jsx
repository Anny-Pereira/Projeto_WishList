//import React from 'react';
import {Component} from 'react';

export default class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos : [],
            idDesejo : 0,
            idUsuario : 0,
            descDesejo : ''
        }
    }


    buscarDesejo = () => {
        console.log('Agora vamos fazer a chamada para a api.')

        //dentro dos parenteses vamos informar qual é o end point. Por padrao ele sempre inicia como GET.
        fetch('http://localhost:5000/api/Desejos')

        //
        .then(resposta => resposta.json())

        //
        .then(dados => this.setState( { listaDesejos: dados } ) )

        //caso ocorre algum erro, mostra no console do navegador
        .catch(error => console.log(error))

        //.then(this.setState({descDesejo : ''})
    };

    //onChange vai disparar por tecla e invocar essa funcao.
    atualizaDesejo = async (event) => {
        //console.log('acionou essa funcao')

        await this.setState({
            //dizendo que o target (alvo) do evento ,  vamos pegar o value(valor) 
            descDesejo: event.target.value
        });
        console.log(this.state.descDesejo);
    };

    //
    cadastrarNovoDesejo = (event) => {
                
        event.preventDefault();
            
                fetch('http://localhost:5000/api/Desejos', {

                    method: 'POST',

                    body: JSON.stringify({ descDesejo : this.state.descDesejo }), //Objeto js 

                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                .then(console.log("Desejo cadastrado."))
                
                //caso ocorra algum erro, mostra no console do navegador.
                .catch(error => console.log(error))

                //
                .then(this.buscarDesejo)       
    };   

    componentDidMount() {
        this.buscarDesejo();
    };

    render(){
        return (
            <div>
                <main>
                    <section>
                        <h2>Lista de Desejos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Usuario</th>
                                    <th>Desejo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaDesejos.map((listaDesejos) => {
                                        return (
                                            <tr key={listaDesejos.idDesejo}>
                                                <td>{listaDesejos.idDesejo}</td>
                                                <td>{listaDesejos.idUsuario}</td>
                                                <td>{listaDesejos.descDesejo}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                    {/*Cadastro de um novo desejo*/}
                    <section>
                        <h2>Cadastrar um novo desejo</h2>
                        <form onSubmit={this.manipularDesejo} >
                        <div>
                                {/* valor do state é o input */}
                                <input
                                    type="text" value={this.state.descDesejo}
                                    placeholder="Descrição do desejo"
                                        
                                    //cada vez que tiver uma mudanca, (por tecla)
                                    onChange={this.atualizaDesejo}
                                />
                                    
                                <button type="submit" >Cadastrar</button>
                                {/* Faz a chamada da função limparCampos */}

                                <button type="button" onClick={this.limparCampos} style={{ display : '' }}>
                                    Cancelar
                                </button>
                        </div>
                        </form>
                    </section>
                </main>
            </div>
        )
    };
};