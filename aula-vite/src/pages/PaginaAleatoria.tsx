import { useState } from "react";

function PaginaAleatoria(){


    
    const [numeroUm, setnumeroUm] = useState (0)
    function ChangeNumeroUm(Event : React.ChangeEvent<HTMLInputElement>) {
        setnumeroUm(Number(Event.target.value));
    }


    const [numeroDois, setnumeroDois] = useState (0)
    function ChangeNumeroDois(Event : React.ChangeEvent<HTMLInputElement>) {
        setnumeroDois(Number(Event.target.value));
    }

    const [Resultado, setResultado] = useState (0)

    function handleClickButtonMais(){
        setResultado(numeroUm + numeroDois);
    }

    function handleClickButtonMenos(){
        setResultado(numeroUm - numeroDois);
    }

    function handleClickButtonX(){
        setResultado(numeroUm * numeroDois);
    }

    function handleClickButtonDiv(){
        setResultado(numeroUm / numeroDois);
    }

    return(
        <div className='calculadora'>
            <h1>Calculadora</h1>
            <br />
            <input type="Numero" onChange={ChangeNumeroUm} />
            <input type="Numero" onChange={ChangeNumeroDois} />
            <br />
            <button onClick={handleClickButtonMais}> Somar </button>
            <button onClick={handleClickButtonMenos}> Subtrair </button>
            <button onClick={handleClickButtonX}> Multiplicar </button>
            <button onClick={handleClickButtonDiv}> Dividir </button>
            <br />
            {Resultado} 
        </div>
    )


}


export default PaginaAleatoria