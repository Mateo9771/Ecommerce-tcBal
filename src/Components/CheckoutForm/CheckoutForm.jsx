import './CheckoutForm.css'
import { useState  } from 'react'

const CheckoutForm = ({onConfirm}) =>{
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState ('')

const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
        name, phone, email
    }

    onConfirm(userData)
}

return (
    <div className='ContainerForm'>
        <form onSubmit={handleConfirm} className='Form'>
            <label className='Label'>Nombre:
                <input type="text" className='Input' value={name} onChange={({target}) => setName(target.value)} />
            </label>
            <label className='Label'> Telefono:
                <input type="text" className='Input' value={phone} onChange={({target}) => setPhone(target.value)} />
            </label>
            <label className='Label'> Email:
                <input type="text" className='Input' value={email} onChange={({target}) => setEmail(target.value)} />
            </label>
            <div className='Label'>
                <button type='submit' className='ButtonForm'>Crear Orden</button>
            </div>
        </form>
    </div>
)
}

export default CheckoutForm