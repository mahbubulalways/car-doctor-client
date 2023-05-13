
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer';
import Navbar from '../Components/Share/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;