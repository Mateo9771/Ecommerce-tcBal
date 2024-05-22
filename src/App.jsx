import NavBar from "./Components/Navbar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartProvider } from "./Components/CartContext/CartContext"
import Cart from "./Components/Cart/Cart"
import Testing from "./Components/Test/Test"
import Checkout from "./Components/Checkout/Checkout"
import './App.css'

function App() {

return(
  <div className="App">
  <BrowserRouter>
  <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={'Bienvenido'}/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenido'}/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="*" element={<h3>Error 404</h3>}/>
    </Routes>
    </CartProvider>
  </BrowserRouter>
    

</div>
)

}

export default App
