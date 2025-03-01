function Listas() {
    
    let ListaNomes = ['Giovanne', 'Lucas', 'João', 'Maria', 'José', 'Ana', 'Carlos', 'Pedro', 'Paulo', 'Felipe']
   
    let ListaObj = [
        {nome: 'Giovanne', idade: 20},
        {nome: 'Lucas', idade: 21},
        {nome: 'João', idade: 22},
        {nome: 'Maria', idade: 23},
        {nome: 'José', idade: 24},
        {nome: 'Ana', idade: 25},
        {nome: 'Carlos', idade: 26},
        {nome: 'Pedro', idade: 27},
        {nome: 'Paulo', idade: 28},
        {nome: 'Felipe', idade: 29}
    ]
    
    return (
        <div>
            <h1>Rederização de lista em React</h1>
                {ListaNomes.map(
                    (PosicaoAtual, indexAtual) => (
                    <div key={indexAtual}> {PosicaoAtual} </div>
                )
        )}

            <br></br>
                <h1>Rederização de listas de objetos</h1>
                    {ListaObj.map(
                        (ObjAtual, indexObj) => (
                        <div key={indexObj}>
                            <hr />
                            Nome: {ObjAtual.nome} <br />
                            Idade: {ObjAtual.idade} <br />
                            <hr />
                        </div>
                    )
            )}

            <br></br>
                <h1>Rederização de Componente</h1>
                    {ListaObj.map(
                        (ObjAtual, indexObj) => (
                            <div key={indexObj}>
                                <itemLista />
                        </div>
                )
            )}

        </div>
    )
}

export default Listas