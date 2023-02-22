import ItemsCount from "../ItemsCount/ItemsCount"

const ItemListContainer = ({greeting}) => {
    return (
      <div>
          <h3>{greeting}</h3>
          <ItemsCount/>
          
      </div>
    )
  }
  
  export default ItemListContainer