import '../../style/Style.css'


type Props = {
    texto: string
    FN_Acao: () => void
}



function Filho(valores: Props) {
  return (
    <div className='filho-container'>
        {valores.texto}
        <br />
        <button onClick={valores.FN_Acao}>Clique aqui</button>
    </div>
  )
}

export default Filho;