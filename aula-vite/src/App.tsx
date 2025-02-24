import './style/Style.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Giovanne from './pages/Giovanne'
import PaginaAleatoria from './pages/PaginaAleatoria'
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadastro';


function App() {
   return (
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/Giovanne' element={<Giovanne/>} />
      <Route path='PaginaAleatoria' element={<PaginaAleatoria/>} />
      <Route path='/Cadastro' element={<Cadastro/>} />
    </Routes>
   )
 }

 export default App
