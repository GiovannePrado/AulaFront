import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom" 
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";

function Sobre () {

    const Parametros = useParams();
    const navegacao = useNavigate();

    function handleVoltar (){
        navegacao('/')
    }

    return(
        <div>
            <Cabecalho />
            <button onClick={handleVoltar}> Voltar </button>
            <Rodape />
        </div>
    )

}

export default Sobre