import Item from "../Item/Item"
import "./itemList.css"
import { Link } from "react-router-dom"


const ItemList = ({productos}) => {
  return (
    <div className="container">
        <ul className="item-list">
        {productos.map ((producto) =>(
          <Link key={producto.id} to= {`item/${producto.id}`}>
            <Item producto={producto}/>
          </Link>
        )) }
        </ul>

    </div>
  )
}

export default ItemList