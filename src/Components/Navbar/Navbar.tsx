import { useState, type FC, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart/Cart';
import { MyContext } from '../../Context/Context';


interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

    const {cartData}:any=useContext(MyContext)
    const [iconHide, seticonHide] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='w-full h-14 bg-[#2874f0] flex items-center max-md:justify-center gap-5  text-white fixed top-0 pl-[12rem] max-md:pl-1 max-lg:pl-[5rem] font-sans'>
                <div className='w-52 max-md:w-20'>
                    <div className='text-2xl max-md:text-lg italic font-semibold cursor-pointer max-md:pl-5'>B2cart</div>
                    <div className='max-sm:hidden text-xs italic hover:underline font-medium cursor-pointer text-[#ffe500]'>Future of India</div>
                </div>

                <div className='flex h-9 w-[28rem] max-md:w-16 bg-white justify-between max-md:justify-center items-center px-4 max-md:px-0 rounded-sm cursor-text'>
                <p className='text-gray-500 max-lg:overflow-hidden max-md:hidden'>Search for product </p><span><FaSearch className='text-[#2874f0] text-md cursor-pointer'/></span>
                </div>

                <div>
                    <button className='bg-[#ffffff] text-[#2874f0] text-md px-10 max-md:px-5 py-1 font-semibold rounded-sm'>Login</button>
                </div>

                {/* <div className='font-semibold cursor-pointer max-md:hidden'>Become a Seller</div> */}

                <div className='flex cursor-pointer font-semibold items-center gap-1 text-gray-100 p-3 max-sm:hidden' onMouseEnter={() => seticonHide(true) } onMouseLeave={() => seticonHide(false)}>More<span className='text-[12px]'>{iconHide ? <FaAngleUp /> : <FaAngleDown />}</span></div>

                <div onClick={()=>setOpen(!open)} className='flex px-8 relative items-center gap-2 font-semibold cursor-pointer'>
                    <span><FaShoppingCart className='max-md:text-xl'/>
                    {cartData.length <= 0 ?'':
                    <span className="absolute -top-2 max-md:-top-3.5 font-semibold right-12 max-md:right-7 w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-xs">{cartData?.length}</span>}
                    </span><span className='max-md:hidden'>Cart</span> 
                </div>

            </div>
              <div className={`h-screen w-1/3 max-lg:w-1/2  max-sm:w-full bg-white rounded-t-lg shadow-2xl fixed right-0 top-0  transition-all ${open?'translate-x-0':'translate-x-full'}`}>
              <Cart {...{setOpen}}/>
              </div>
        </>
    );
}

export default Navbar;
