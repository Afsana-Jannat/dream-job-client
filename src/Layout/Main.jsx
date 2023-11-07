
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div className='2xl:container mx-auto' style={{backgroundImage: 'url(https://i.ibb.co/Jz6WR15/white-silver-christmas-wedding-anniversary-snow-fall-background-or-birthday-diamond-jewelry-bling-gl.webp)'}}>

            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;