import '../style/Style.css'
import { useState } from "react";
import Cabecalho from "../Cabecalho";

import { Produto } from "../types/produtos";

function RequisicoesTypesAsync(){

    const [produtos, setprodutos] = useState<Produto[]>([]);

    const [loading, setLoading] = useState(false);

    const carregarProdutos = async () => {

        setLoading(true)

        try{
            let response = await fetch("https://fakestoreapi.com/products/");
            let json = await response.json();

            const dataArray = Array.isArray(json) ? json: [json]
            setLoading(false);

            setprodutos(dataArray);
        } catch (erro) {
            setLoading(false);

            alert('Falha ao carregar os produtos. Tente novamente mais tarde.')
            console.error(erro);
        }

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
                {loading &&
                    <div>Carregando Conteudo...</div>
                }

                {!loading &&
                <div>

                {produtos.map((item, index) => (
                    <div key={index} >
                        <img src={item.image} className='Lista' />
                        <br />
                        Titulo do item: {item.title}
                        <br />
                        Descrição do item: {item.description}
                        <br />
                        <hr />
                    </div>
                
                ))}
                 </div>
                }
              </div>
        </div>
    )
}

export default RequisicoesTypesAsync;