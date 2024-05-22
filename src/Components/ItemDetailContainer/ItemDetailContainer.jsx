import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
//import {getProductById } from '../../Data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../Service/Firebase/FirebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {

    
        

       const docRef = doc(db, 'itemProduct', itemId)
        
        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })

       /* getProductById(itemId)
        .then(response => {
            setProduct(response)
        })*/

        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer