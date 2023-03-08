import "./item.css"

const Item = ({producto}) => {
  return (
    <div>
        <li className="item-card">
            <img alt={producto.title} src={producto.image}/>
            <h2>{producto.title}</h2>
            <h3>{producto.description}</h3>
            <h3> $ {producto.price}</h3>
        </li>
    </div>
  )
}

export default Item
