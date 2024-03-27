import './Header.scss';
import siteLogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <nav className='main-navigation'>
      <div className='site-brand-logo'>
        <img src={siteLogo} alt="Sri Balaji Portfolio Website logo" />
      </div>
      <ul className='nav-items'>
        <li className='nav-link active'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-link'>
          <Link to='/experience'>Experience</Link>
        </li>
        <li className='nav-link'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
    
    </>
  );
}

export default Header;