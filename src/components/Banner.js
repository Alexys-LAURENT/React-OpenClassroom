import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommandation from './Recommendation'
function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <div className='lmj_banner-row'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            <Recommandation />
        </div>
    )
}

export default Banner