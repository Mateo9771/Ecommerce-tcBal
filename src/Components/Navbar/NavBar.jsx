import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from'../../assets/logo/logotec.png'
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { IoIosTabletPortrait } from "react-icons/io";

function NavBar() {

    return (
        <nav className='navbar'>

            <Link to='/'><img className='logo' src={logo} alt="" /></Link>

            <div className='nav-button'>
                <NavLink to={`/category/celular`} className='Button'><p>Celulares</p> <IoIosPhonePortrait className='iconButton' size="30px"/></NavLink>
                <NavLink to={`/category/tablet`} className='Button'><p>Tablets</p><IoIosTabletPortrait className='iconButton' size="30px"/></NavLink>
                <NavLink to={`/category/notebook`} className='Button'><p>Notebooks</p> < IoIosLaptop className='iconButton' size="30px"/></NavLink>
            </div>
            
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar