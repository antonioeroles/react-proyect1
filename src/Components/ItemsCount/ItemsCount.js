import './itemCount.css'
import { useState } from 'react'

const ItemsCount = () => {
    const [contador, setContador] = useState (0)
    const stock = 7
    const sumar = () =>{
        if (stock=== contador){
            alert("no puedes llevar mas por falta de stock")
            return
        }
    setContador (contador + 1)
    }

    const restar = () =>{
        if (contador=== 0){
            return
        }
        setContador (contador -1)
    }
  return (
    <div className="counter">
        <div className="controller">
            <button onClick={restar}> - </button>
            <div className='number'>
                <span> {contador} </span>
            </div>
            <button onClick={sumar}> + </button>
        </div>
        <div>
            <button>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemsCount