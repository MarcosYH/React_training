import logo from '../assets/logo.png'
import '../styles/Banner.css'
function Banner() {
    const title = "La maison jungle"
    const soustitle= "bienvenu à vous"
      return (
        <div className='banner'> 
        <img src={logo} alt='La maison jungle' className='logo'  />
        <h1 className='lmj-title'>{title}</h1>
        <h2>{soustitle}</h2>  
        </div> )
    }

    export default Banner