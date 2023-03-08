import ItemDetail from "../ItemDetail/ItemDetail";
import vinoteca from "../../Products/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleItemDatabase({id}) {
    return  new Promise((resolve, reject) => {
      setTimeout (()=>{
        resolve (vinoteca)
      }, 2000);
    })
  }

const ItemDetailContainer = () => {
    const [singleProduct, setSingleProduct] = useState ([]);
    const params = useParams ();
    const idProd = params.idProd

    useEffect(() =>{
        const getProduct = new Promise((resolve, reject) => {
            setTimeout (() => {
                let productoBuscado = vinoteca.find (item => item.id === parseInt(idProd))
                resolve (productoBuscado)
            }, 2000);
        });
        getProduct.then((respuesta) => setSingleProduct(respuesta))
        .catch ((error) =>{
            console.log(error);})
    },[]);
  return (
    <div>
        <ItemDetail producto ={singleProduct}/>
    </div>
  )
}

export default ItemDetailContainer