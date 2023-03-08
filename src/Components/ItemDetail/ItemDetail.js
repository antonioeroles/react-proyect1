

const ItemDetail = ({producto}) => {
  return (
    <div>
        <ul>
            <li key={producto.id}>
                <img alt={producto.title} src={producto.image}/>
                <h2>{producto.title}</h2>
                <h3>{producto.description}</h3>
                <h3> $ {producto.price}</h3>
            </li>
        </ul>
    </div>
  )
}

export default ItemDetail