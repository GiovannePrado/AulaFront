import '../../style/Style.css'
import Filho from '../Filho';

function Pai(){

    function HandleClick(){
    alert('Mensagem disparada')
    }

    return (
        <div className='pai-container'>
            <Filho texto='Origem do texto = Pai'FN_Acao={HandleClick}/>
        
        </div>
    )
}

export default Pai;