import CareScale from './CareScale'
import '../styles/PlantItem.css'
function PlantItem({ id, cover, name, light, water, isSpecialOffer, price }) {


    function handleClick() {
        alert(`Vous voulez acheter 1 ${name}? Très bon choix 🌱✨`)
    }

    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick()}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}></img>
            {name} {price}€
            {isSpecialOffer ? <div className='lmj-plant-item-solde'><p>Soldé !</p></div> : null}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem