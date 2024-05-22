import './ItemCount.css'
import {useState} from 'react'

function ItemCount ({stock, initial, onAdd}){
    const [quantity, setQuantity] = useState (initial)

    function increment () {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    function decrement (){
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}> - </button>
                <h4>{quantity}</h4>
                <button className='Button' onClick={increment}> + </button>
            </div>
            <div className='Add-Button'>
                <button className='Button-Add' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )

}


export default ItemCount