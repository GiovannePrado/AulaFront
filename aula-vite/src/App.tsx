import './style/Style.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Giovanne from './pages/Giovanne'
import PaginaAleatoria from './pages/PaginaAleatoria'
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadastro';
import Listas from './pages/Listas';
import Comunicacao from './pages/Comunicacao';
import Requisicoes from './pages/Requisicoes';
import RequisicoesTypes from './pages/RequisicoesTypes';
import RequisicoesTypesAsync from './pages/RequisicoesTypesAsync';
import RequisicoesPost from './pages/RequisicoesPost'

function App() {
   return (
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/Giovanne' element={<Giovanne/>} />
      <Route path='PaginaAleatoria' element={<PaginaAleatoria/>} />
      <Route path='/Cadastro' element={<Cadastro/>} />
      <Route path='/Listas' element={<Listas/>} />
      <Route path='/Comunicacao' element={<Comunicacao/>} />
      <Route path='/requisicoes' element={<Requisicoes/>} />
      <Route path='/requisicoesTypes' element={<RequisicoesTypes/>} />
      <Route path='/requisicoesTypesAsync' element={<RequisicoesTypesAsync/>} />
      <Route path='/requisicoesPost' element={<RequisicoesPost/>} />
    </Routes>
   )
 }

 export default App
