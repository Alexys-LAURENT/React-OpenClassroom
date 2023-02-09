import { plantList } from '../datas/plantList'
import "../styles/Categorie.css"

function Categorie({ categorieDisplay, updateCategorieDisplay }) {


    const categories = [];

    plantList.forEach((item) => {
        if (!categories.includes(item.category)) {
            categories.push(item.category)
        }
    })


    return (
        <div className='filterContainer'>
            <h3>Filtrer par catégorie :</h3>
            <select onChange={(e) => updateCategorieDisplay(e.target.value)} className="selectCategorie">
                <option value="" >Toutes</option>
                {categories.map((uneCategorie) => (
                    <option key={uneCategorie}>{uneCategorie}</option>
                ))}
            </select>
        </div>
    )
}

export default Categorie