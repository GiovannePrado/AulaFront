import { useState } from "react";
import Rodape from "../componentes/Rodape";
import Cabecalho from "../Cabecalho";

function Cadastro(){
    const [nomeCliente, setnomeCliente] = useState ('')
    function ChangeNomeCliente(Event : React.ChangeEvent<HTMLInputElement>) {
        setnomeCliente(Event.target.value);
    }

    return(
        <div>
            <Cabecalho/>
            <h1>Página do cadastro</h1>
            <br />
            <label> Nome do cliente</label>
            <br />
            <input type="text" onChange={ChangeNomeCliente} />
            <br />
            O valor digitado é: {nomeCliente}
            <Rodape />
        </div>
    )
}

export default Cadastro

