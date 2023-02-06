import sun from '../assets/sun.svg'
import water from '../assets/water.svg'


function CareScale(props) {
    const { scaleValue, careType } = props
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType

    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? <img src={sun} alt='sun-icon'></img> : <img src={water} alt='water-icon'></img>

    function handleCareMessage() {
        if (careType === 'light') {
            switch (scaleValue) {
                case 1: alert('Cette plante requiert peu de lumière'); break;
                case 2: alert('Cette plante requiert modérement de lumière'); break;
                case 3: alert('Cette plante requiert beacoup de lumière'); break;
                default: break;
            }
        } else {
            switch (scaleValue) {
                case 1: alert("Cette plante requiert peu d'eau"); break;
                case 2: alert("Cette plante requiert modérement d'eau"); break;
                case 3: alert("Cette plante requiert beacoup d'eau"); break;
                default: break;
            }
        }
    }
    return (
        <div>
            {
                range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => handleCareMessage()}>{scaleType}</span> : null
                )
            }
        </div>
    )
}

export default CareScale