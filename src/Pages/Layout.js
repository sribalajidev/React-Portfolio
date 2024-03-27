// React Component Import
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default Layout;