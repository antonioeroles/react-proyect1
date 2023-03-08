import ItemsCount from "../ItemsCount/ItemsCount"
import ItemList from "../ItemList/ItemList"
import vinoteca from "../../Products/Products"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function ItemsDatabase() {
  return  new Promise((resolve, reject) => {
    setTimeout (()=>{
      resolve (vinoteca)
    }, 2000);
  })
}

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  const {category} = useParams()
  useEffect(() =>{
    let getProducts = ItemsDatabase();
    getProducts.then ((response) =>{
      if (category) {
        setProducts (response.filter((product) =>product.category === category))
      }
      else {
        setProducts(response);
      }
      
    })
    .catch ((error) =>{
       console.log(error);})
  },[category]);

 /* useEffect(() =>{
    const FilterProducts = products.filter((product) => product.category === category);
    setProducts(FilterProducts)
  }, [category]);*/

   
    return (
      <div>
          
          <ItemsCount/>
          <ItemList productos={products}/>
          
      </div>
    )
  }
  
  export default ItemListContainer