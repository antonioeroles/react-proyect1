import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
  return (
    <div>
        <ul className="item-lista">
            <li key={producto.id} className= "item-card">
                <img alt={producto.title} src={producto.image} className="cardImagen"/>
                <h2>{producto.title}</h2>
                <h3>{producto.description}</h3>
                <h3> $ {producto.price}</h3>
            </li>
        </ul>
    </div>
  )
}

export default ItemDetail