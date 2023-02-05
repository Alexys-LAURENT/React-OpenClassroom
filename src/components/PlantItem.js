import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert('Vous avez cliqué sur ' + plantName + '');
}
function PlantItem({ id, cover, name, light, water }) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem