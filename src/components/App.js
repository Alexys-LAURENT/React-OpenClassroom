import { useState } from 'react';
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Cart from './Cart'
import Footer from './Footer'
import '../styles/Layout.css'
import logo from '../assets/logo.png'

function App() {
  const [cart, updateCart] = useState([]);
  const [categorieDisplay, updateCategorieDisplay] = useState("");
  return <div><div>
    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <Cart cart={cart} updateCart={updateCart} />
    <div className='lmj-layout-inner'>
      <ShoppingList cart={cart} updateCart={updateCart} categorieDisplay={categorieDisplay} updateCategorieDisplay={updateCategorieDisplay} />
    </div>
  </div>
    <Footer />
  </div>
}

export default App