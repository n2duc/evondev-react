import React from 'react'
import { useGallery } from './gallery-context'

const CartList = () => {
    const { cartItems, removeCartItem, removeAllCartItem } = useGallery();
    console.log("Carts List", cartItems)
    return (
        <div className="py-10 px-5 flex flex-col gap-5 items-start">
            { cartItems.length > 0 && cartItems.map((cart) => (
                <div className="inline-flex gap-x-5 justify-between items-center" key={cart.id}>
                    <img src={cart.url} alt="cartItem" className='w-10 h-10 rounded-full object-cover'/>
                    <button className='p-3 rounded-lg bg-red-400 text-white text-sm font-semibold' onClick={() => removeCartItem(cart.id)}>Delete</button>
                </div>
            )) }
            { cartItems.length > 0 && <button className='py-2 px-4 bg-red-500 text-white font-semibold text-sm rounded-lg' onClick={() => removeAllCartItem()}>Delete All</button>}
        </div>
    )
}

export default CartList