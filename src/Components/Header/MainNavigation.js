import siteLogo from '../../assets/images/logo.png'
import { Outlet, Link } from "react-router-dom";
import SocialFollow from '../SocialIcons/SocialIcons';

const MainNavigation = () => {
  return (
    <>
      <header className="container mx-auto">
        <div className="flex justify-between items-center border-b border-stone-300">
          <div className="site-brand-logo">
            <img src={siteLogo} alt="site brand logo" className='max-w-44' />
          </div>
          <SocialFollow />
        </div>
        <nav>
          <ul className="flex gap-8 py-5">
            <li className="text-stone-500 hover:text-stone-800">
              <Link to="/">Home</Link>
            </li>
            <li className="text-stone-500 hover:text-stone-800">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="text-stone-500 hover:text-stone-800">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
  // Outlet Tag it renders the current route selected.
  // Link Tag is used to set the URL and keep track of browsing history.
  // Anytime we link to an internal path, we will use <Link> instead of <a href="">.
};

export default MainNavigation;