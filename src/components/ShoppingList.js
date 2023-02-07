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
        <div>
            <Categorie categorieDisplay={categorieDisplay} updateCategorieDisplay={updateCategorieDisplay} />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isSpecialOffer, price, category }) =>
                    !categorieDisplay || categorieDisplay === category ? (
                        <div>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                isSpecialOffer={isSpecialOffer}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList