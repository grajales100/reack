
import { Route, Routes } from 'react-router-dom';
import { Escribir } from './components/Pages/Escribir/Escribir';
import { Lista } from './components/Pages/Lista/Lista';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Reloj } from './components/Pages/Reloj/Reloj';

function App() {
    return ( 
        <Routes>
            <Route path='/' element={<Escribir />} />
            <Route path='/apiRick' element={<Escribir />} />
            <Route path='/lista' element={<Lista />} />
            <Route path='/reloj' element={<Reloj />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;