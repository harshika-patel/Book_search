import { Link } from 'react-router-dom';
import logo from '../../assets/Image/logo.png'
import Search from '../Search/Search';
import './Header.scss';
const Header=()=>{
    return(
        <header className='header'>
            <Link  to='/' className='header__link header'>
            <img src={logo} alt="React Logo" className='header__logo'/>
            <h1 className='header__title'>Book Search</h1>
            <Search className="header__search"/>
            </Link>
        </header>
    )
}

export default Header;