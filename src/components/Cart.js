import { useState, useEffect } from 'react';
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    let classToApply = "";
    const [isOpen, updateIsOpen] = useState(false);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
    const nbPlantsinCart = cart.reduce(
        (acc, plantType) => acc + plantType.amount,
        0
    )


    useEffect(() => {
        document.title = `LMJ : ${total}€`
    }, [total])


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

    isOpen ? classToApply = "lmj-cart open" : classToApply = "lmj-cart"

    return (
        <div className={classToApply}>
            <div className='cartToggle' onClick={() => updateIsOpen(isOpen === true ? false : true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>

                {nbPlantsinCart > 0 ? <div className='nbPlantsinCart'><p>{nbPlantsinCart}</p></div> : null}

            </div>
            {isOpen ?
                <div className='cartContent'>
                    <h2>Panier</h2>
                    {cart[0] ? cart.map(({ name, price, amount }, index) => (
                        <div className='text-align-center' key={`${name}-${index}`}>
                            {name} {price}€ x {amount}
                            <div className='deleteBtn' onClick={() => deleteOneElementFromCart(name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                                </svg>
                            </div>
                        </div>
                    )) : <div>Votre panier est vide</div>}
                    <h3>Total : {total}€</h3>
                    {cart[0] ? <button onClick={() => updateCart([])}>Vider le panier</button> : null}
                </div>
                : null}
        </div>
    )
}

export default Cart