import ItemsCount from "../ItemsCount/ItemsCount"
import ItemList from "../ItemList/ItemList"
import Products from "../../Products"
import { useEffect, useState } from "react"


function ItemsDatabase() {
  return  new Promise((resolve, reject) => {
    setTimeout (()=>{
      resolve (Products)
    }, 2000);
  })
}

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([]);


  useEffect(() =>{
    let getProducts = ItemsDatabase();
    getProducts.then ((response) =>{
       setProducts(response);
    })
    .catch ((error) =>{
       console.log(error);})
  },[]
  );
   
    return (
      <div>
          <h3>{greeting}</h3>
          <ItemsCount/>
          <ItemList productos={products}/>
          
      </div>
    )
  }
  
  export default ItemListContainer