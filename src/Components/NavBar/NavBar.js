import './NavBar.css'
import CartWidgets from '../CartWidgets/CartWidgets'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div>Logo</div>
        <div>
            <ul className='options'>
                <li>Vinos</li>
                <li>Aperitivos</li>
                <li>Espumantes</li>
            </ul>
        </div>
        <div>
            <CartWidgets/>
        </div>
    </div>
  )
}

export default NavBar