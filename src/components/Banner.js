import '../styles/Banner.css'
// import Recommandation from './Recommendation'


function Banner({ children }) {
    return (
        <div className='lmj-banner'>
            {children}
            {/* <Recommandation /> */}
        </div >
    )
}

export default Banner