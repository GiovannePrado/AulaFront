import '../style/Style.css'
import { useState } from "react";
import Cabecalho from "../Cabecalho";

import { Usuarios } from "../types/usuarios";
// import { Produto } from "../types/produtos";

function RequisicoesPost(){

    const [loading, setLoading] = useState<false>()
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

    const carregarUsuarios = async () => {
        setLoading(true);
        let response = await fetch ("https://jsonplaceholder.typicode.com/todos");
        let json = await response.json();

        const dataArray = Array.isArray(json) ? json: [json]

        setLoading(false);
        setUsuarios(dataArray);

    }

    // const [produtos, setprodutos] = useState<Produto[]>([]);
    


    return(
        <div>
            <Cabecalho/>

            <h1>Página Exemplo de Requisições</h1>
            <br />
            <button onClick={carregarUsuarios}> Carregar Usuarios </button>
            <br />
            <br />
            Total de Usuarios: {usuarios.length}
            <br /><hr />
            <h1>Adicionar novo post</h1>
            <input type="text" />
            <br />
            <br />
            <input type="text" />
            <br />
            <br />
            <button>Adicionar</button>
            <hr />

            <h1>Lista de Usuarios</h1>
              <div>
                {usuarios.map((item, index) => (
                    <div key={index} >
                        <br />
                        USER ID: {item.userId}
                        <br />
                        Titulo: {item.title}
                        <br />
                        <hr />
                    </div>
                ))}
              </div>
        </div>
    )
}

export default RequisicoesPost