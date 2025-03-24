import { useState } from "react";
import Cabecalho from "../Cabecalho";

function Requisicoes(){

    const [produtos, setprodutos] = useState([]);

    const carregarProdutos = () => {
        fetch("https://fakestoreapi.com/products/")

            .then((response) => {
                return response.json();
            })

            .then((json) => {
                setprodutos(json);
            })


    }

    return(
        <div>
            <Cabecalho/>

            <h1>Página Exemplo de Requisições</h1>
            <hr /><br />
            <button onClick={carregarProdutos}> Carregar produtos </button>
            <br />
            <br />
            Total de produtos: {produtos.length}
            <br /><hr />

        </div>
    )
}

export default Requisicoes;