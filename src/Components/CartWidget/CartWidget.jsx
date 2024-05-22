import { FaOpencart } from "react-icons/fa6";
import './CartWidget.css'
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

function CartWidget (){
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className="icon-cart" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
                    
            <FaOpencart size="40px"/>
            <span className="badge">
                {totalQuantity}
            </span>
      
        </Link>



    )
}

export default CartWidget