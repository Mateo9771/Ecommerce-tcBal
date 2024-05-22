import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const ItemDetail = ({id, name, img, category, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext (CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,name,price
        }

        addItem(item, quantity)
    }

    return(
        
        <article className='ContainerItemDetail'>
            <header className='HeaderItemDetail'>
                <h2>
                    {name}
                </h2>
            </header>
            <picture className='PictureItemDetail'>
                <img src={img} alt={name} />
            </picture>
            <section className='SectionItemDetail'>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer className='FooterItemDetail'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Button'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            
            </footer>
        </article>
        
    )
}

export default ItemDetail