import sun from '../assets/sun.svg'
import water from '../assets/water.svg'


function CareScale(props) {
    const { scaleValue, careType } = props
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType

    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? <img src={sun} alt='sun-icon'></img> : <img src={water} alt='water-icon'></img>

    return (
        <div>
            {
                range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )
            }
        </div>
    )
}

export default CareScale