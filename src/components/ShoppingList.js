import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
const categories = [];

plantList.forEach((item) => {
    if (!categories.includes(item.category)) {
        categories.push(item.category)
    }
})
console.log(categories)
function ShoppingList() {
    return (
        <div>
            <ul>
                {categories.map((uneCategorie) => (
                    <li key={uneCategorie}>{uneCategorie}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList