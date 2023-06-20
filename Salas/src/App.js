import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Componentes/Navbar';
import { ListadeSalas, SalasForm } from './Componentes';

export const App = () => {
  return (
    <div>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<ListadeSalas/>} />
          <Route path='/criar-sala' element={<SalasForm />} />
          <Route path='/editar-sala/:id' element={<SalasForm />}/>
        </Routes>
      </div>
    </div>
  )
}

