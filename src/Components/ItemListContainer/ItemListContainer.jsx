import { useEffect, useState } from "react";
//import { getProducts, getProductsByCategory } from "../../Data"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import {getDocs, collection , query, where} from 'firebase/firestore'
import { db } from "../Service/Firebase/FirebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'itemProduct'), where('category', '==', categoryId)) : collection(db, 'itemProduct')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return{ id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })

        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    return (
        <div className="ContainerList col-12">
            <div className="Contain col-9">
            <div className="titulo"><h1>{greeting}</h1></div>
            {loading ? (<p>Cargando Productos</p>) : (<ItemList products={products}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer