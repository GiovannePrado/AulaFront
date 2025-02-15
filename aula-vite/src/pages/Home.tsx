import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"
import '../style/Style-flex.css'
function Home () {

    let numero1: number = 5
    let numero2: number =10
    let numero3: number = 20
    let numero4: number = 50

    function Somar(n1: number, n2: number): number{
        return n1 + n2;
    }

    function Subtrair(n1: number, n2: number): number{
        return n1 - n2;
    }

    function multiplicar(n1: number, n2: number): number{
        return n1 * n2;
    }

    function dividir(n1: number, n2: number): number{
        return n1 / n2;
    }


    return(
        <div>
            <Cabecalho />
            <h1>Pagina Home</h1>
            <br />
            Variavel 1 é: {numero1}
            <br />
            Vareiavel 2 é: {numero2}
            <br />
            A soma dos numeros é: {Somar(numero1 , numero2)}
            <br />
            A subtração dos numeros é: {Subtrair(numero4 , numero2)}
            <br />
            A multiplicação dos numeros é: {multiplicar(numero1 , numero2)}
            <br />
            A divisão dos numeros é: {dividir(numero3 , numero2)}
            <br />
            <Rodape />
        </div>
    )

}

export default Home