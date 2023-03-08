import NavBar from './Components/NavBar/NavBar';
import Titulo from './Components/Titulo/Titulo';
import ItemListContainer from './Components/ItemsListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <div className='App'>
          <Titulo/>
          
        </div>
      </div>
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/category/:category' element= {<ItemListContainer/>} />
        <Route path='item/:idProd' element ={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

