import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id ,name, img, price, stock }) => {

    return(
       
        <article className='CardItem'> 
            <picture className='PictureItem'>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section className='SectionItem'>
            <h3 className="TitleItem">
                    {name}
                </h3>
                <p className='Info'>
                    precio: $ {price}
                </p>
                <p className='Info'>
                    stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>
                    ver detalle
                </Link>
            </footer>
        </article>
    
    )
}

export default Item