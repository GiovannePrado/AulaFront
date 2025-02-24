import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom" 
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";
import { useState } from "react";

function Sobre () {

    const [numero, setnumero] = useState(0);
    const [nome, setnome] = useState('');

    // function handleClickButton(){
    //     setnumero(numero + 10);
    // }

    function handleClickButton(){
        setnumero(numero + 10);
    }

    function handleClickButtonm(){
        setnumero(numero - 10);
    }



    function handleMudarNome(){
        setnome('Jhonny')
    }

    const Parametros = useParams();
    const navegacao = useNavigate();

//    function handleVoltar (){
       // navegacao('/')
   // }

    return(
        <div>
            <Cabecalho titulo="Titulo Informado"
                        pagina="Home Informada"
                        />
            O numero informado é: {numero}
            <br />
            <button onClick={handleClickButton}> Somar 10 </button>
            <button onClick={handleClickButtonm}> Subtrair 10 </button>
            <hr />
            Nome:
            <br />
            O meu nome não é: {nome}
            <br />
            <button onClick={handleMudarNome}>Alterar Nome</button>
            <Rodape />
        </div>
    )

}

export default Sobre