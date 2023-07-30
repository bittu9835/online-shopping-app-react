import type { FC } from 'react';
import Product from '../Products/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
    
    return (
        <>
        <Navbar/>
        <ToastContainer/>
        <Product/>
        </>
    );
}

export default Home;
