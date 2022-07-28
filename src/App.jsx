// import logo from './logo.svg';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Cart from './components/Cart/Cart';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer texto='VELAS ALMALUZ'/>}/>
    <Route path='/categoria/:categoriaId' element={<ItemListContainer texto='VELAS ALMALUZ'/>}/>
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    
    </Routes>
    <ItemDetailContainer/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
