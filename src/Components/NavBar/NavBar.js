import './NavBar.css'
import CartWidgets from '../CartWidgets/CartWidgets'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div>🍾</div>
        <div>
            <ul className='options'>
              <li>
                <Link to= '/'> Home</Link>
              </li>
                <li>
                 <Link to='/category/Vinos'> Vinos</Link> 
                </li>
                <li>
                  <Link to='/category/Aperitivos'>Aperitivos</Link>
                </li>
                <li>
                  <Link to='/category/Espumantes'>Espumantes</Link>
                </li>
            </ul>
        </div>
        <div>
            <CartWidgets/>
        </div>
    </div>
  )
}

export default NavBar