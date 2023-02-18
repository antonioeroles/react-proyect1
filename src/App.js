import NavBar from './Components/NavBar/NavBar';
import Titulo from './Components/Titulo/Titulo';
import ItemListContainer from './Components/ItemsListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='App'>
      <Titulo/>
      <ItemListContainer greeting = 'Hola a Todos'/>
      </div>
      
    </div>
  );
}

export default App;

