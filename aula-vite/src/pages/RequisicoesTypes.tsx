import '../style/Style.css'
import { useState } from "react";
import Cabecalho from "../Cabecalho";

import { Produto } from "../types/produtos";

function RequisicoesTypes(){

    const [produtos, setprodutos] = useState<Produto[]>([]);

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

              <h1>Lista de produtos</h1>
              <div>
                {produtos.map((item, index) => (
                    <div key={index} >
                        <img src={item.image} className="products" />
                        <br />
                        Titulo do item: {item.title}
                        <br />
                        Descrição do item: {item.description}
                        <br />
                        <hr />
                    </div>
                ))}
              </div>
        </div>
    )
}

export default RequisicoesTypes;