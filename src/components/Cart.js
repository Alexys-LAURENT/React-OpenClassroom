import '../styles/Cart.css'
function Cart() {
    var MonstreraPrice = 8;
    var LierrePrice = 10;
    var BouquetPrice = 15;
    return (<div ClassName="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Monstrera {MonstreraPrice}€</li>
            <li>Lierre {LierrePrice}€</li>
            <li>Bouquet {BouquetPrice}€</li>
        </ul>
        Total : {MonstreraPrice + LierrePrice + BouquetPrice}
    </div>
    )
}

export default Cart