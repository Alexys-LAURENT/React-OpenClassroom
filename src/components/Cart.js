import { useState } from 'react';
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, updateIsOpen] = useState(false);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    function deleteOneElementFromCart(name) {
        const cartFiltered = cart.filter((plant) => plant.name !== name)
        const elementToModify = cart.filter((plant) => plant.name === name)

        if (elementToModify[0].amount === 1) {
            updateCart(cartFiltered)
        } else {
            elementToModify[0].amount = elementToModify[0].amount - 1
            const updatedCart = cartFiltered.concat(elementToModify)
            updateCart(updatedCart)
        }
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => updateIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {cart[0] ? cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount} <button onClick={() => deleteOneElementFromCart(name)}>Supprimer</button>
                </div>
            )) : <div>Votre panier est vide</div>}
            <h3>Total : {total}€</h3>
            {cart[0] ? <button onClick={() => updateCart([])}>Vider le panier</button> : null}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => updateIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart