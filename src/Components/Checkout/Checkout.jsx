import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Timestamp, addDoc, documentId, getDocs, query, writeBatch, collection, where } from "firebase/firestore"
import { db } from "../Service/Firebase/FirebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import './Checkout.css'


function Checkout () {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext (CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer : {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock  = []

            const ids = cart.map(prod => prod.id)

            if (ids.length === 0) {
                throw new Error("El carrito está vacío")
            }

            const productsRef = collection(db, 'itemProduct')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando la orden</h1>
    }

    if(orderId){
        return <h1 className="ResponseOrder">El id de su orden es: {orderId}</h1>
    }

    return(
        <div className="Checkout">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}

export default Checkout