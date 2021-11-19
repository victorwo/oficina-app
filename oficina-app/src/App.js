import React from 'react';
import api from './Api';
import './index.css';

class Orcamentos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listaOrcamentos: [],
            open: false
        };
    }

    
    async componentDidMount(){
        const response = await api.get('');

        this.setState({listaOrcamentos: response.data});
    }

   
    render(){
        const {listaOrcamentos} = this.state;

        return(
        
        <div className="container">
                <h1>Oficina App</h1>
                {listaOrcamentos.map(orcamento => (
                    <div className="container p-3 my-3 border" key={orcamento.id}>
                        <p>Cliente: {orcamento.customer}</p>
                        <p>Valor: {orcamento.value}</p>
                        <p>Vendedor: {orcamento.seller}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Veja mais</button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Descrição</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Descrição: {orcamento.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))},
            </div>
        );
    }
}

export default Orcamentos;