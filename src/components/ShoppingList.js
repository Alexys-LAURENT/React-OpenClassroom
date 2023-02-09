import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
import Categorie from './Categorie';

function ShoppingList({ cart, updateCart, categorieDisplay, updateCategorieDisplay }) {

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name) //on regarde si la plante ajouté existe déjà dans le panier
        if (currentPlantAdded) { //si elle existe
            const cartFilteredCurrentPlant = cart.filter( // on créer une nouveau tableau d'objet sans cette plante
                (plant) => plant.name !== name
            )
            updateCart([ //on met à jour le panier
                ...cartFilteredCurrentPlant, //avec les plantes déjà presente (on a retirer juste avant celle qui doit être rajouté et qui était déjà presente)
                { name, price, amount: currentPlantAdded.amount + 1 } // on remet celle qu'on a retirer mais avec la valeur du montant modifiée
            ])
        } else { //sinon si la plante ajoutée n'était pas déjà presente
            updateCart([...cart, { name, price, amount: 1 }]) // on met à jour le panier avec son contenue actuel + la nouvelle plante
        }
    }



    return (
        <div className='lmj-shopping-list'>
            <Categorie categorieDisplay={categorieDisplay} updateCategorieDisplay={updateCategorieDisplay} />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isSpecialOffer, price, category }) =>
                    !categorieDisplay || categorieDisplay === category ? (
                        <div className='CardPlant'>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                isSpecialOffer={isSpecialOffer}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)} className="btnAddToCart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg></button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList