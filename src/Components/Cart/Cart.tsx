import { useContext, type FC } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { MyContext } from '../../Context/Context';
import { BsCurrencyRupee } from 'react-icons/bs'
import { toast } from 'react-toastify';
import emptyCart from '../../Assets/img/emptyCart.webp'

interface CartProps {
    setOpen: any
}

const Cart: FC<CartProps> = ({ setOpen }) => {
    const { cartData, setCartData }: any = useContext(MyContext);
    const handleRemove = (id: number) => {
        toast.error('Item Removed to Cart', {
            position: toast.POSITION.TOP_CENTER,
            className: 'bg-red-500',
            autoClose: 1000,
        });

        const index = cartData.findIndex((item: any) => item.id === id);

        if (index !== -1) {
            cartData.splice(index, 1);
            setCartData([...cartData]);
        }
    }

    const handleMinus = (item: any) => {
        item.qty = item.qty - 1;
        if (item.qty < 1) {
            handleRemove(item.id)
        }

        setCartData([...cartData])
    };


    const handlePlus = (item: any) => {
        item.qty = item.qty + 1
        if (item.qty >= 5) {
            item.qty = 5
        }
        setCartData([...cartData])
    }
    return (
        <>
            <div className='w-full h-full flex flex-col justify-between rounded-t-lg'>
                <div className="w-full flex h-12 items-end justify-between px-5">
                    <IoIosArrowRoundBack onClick={() => setOpen(false)} className='text-2xl cursor-pointer' />
                    <span className='font-medium text-lg'>Cart</span>
                </div>

                <div className='w-full h-[90vh] bg-white py-5  overflow-y-auto overflow-x-hidden flex flex-col gap-1 items-center'>
                    {cartData?.length !== 0 ? 
                    <>
                    {cartData.map((item: any) => (
                        <div key={item.id} className='h-32 w-[90%] mx-3 rounded-md border-2 flex'>
                            <div className='w-[75%] border-r p-1'>
                                <img className='w-full h-full' src={item.imgUrl} alt="" />
                            </div>
                            <div className='p-2 flex flex-col justify-between pb-3'>
                                <p className='h-8 overflow-hidden text-lg'>{item.name}</p>
                                <p className='text-xl font-bold flex items-center'>
                                    <BsCurrencyRupee />{item.price * item.qty}
                                    <span className='text-green-600 text-sm ml-5'>33% off</span>
                                </p>
                                <div className='flex justify-around'>
                                    <div className='flex justify-center gap-1'>
                                        <div onClick={() => handleMinus(item)} className='w-8 h-8 rounded-full border flex justify-center items-center text-xl font-bold cursor-pointer'>-</div>
                                        <div className='w-10 h-8 rounded-lg border flex justify-center items-center text-lg font-bold'>{item.qty}</div>
                                        <div onClick={() => handlePlus(item)} className='w-8 h-8 rounded-full border flex justify-center items-center text-xl font-bold cursor-pointer'>+</div>
                                    </div>
                                    <button className='pl-1 font-serif font-semibold' onClick={() => handleRemove(item?.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                ))}
                </>
                : 
                <>
                <img src={emptyCart} alt="" />
                <p className='text-3xl font-bold italic font-serif'>Your Cart Is Empty</p>
                <p className='text-slate-400 italic'>Add Items in Your Cart</p>
                <span onClick={() => setOpen(false)} className='cursor-pointer hover:underline'>Continue Shoping</span>
                </>
                    }
                        </div >


                    {cartData?.length !==0 &&
                    <div className='bg-[#e2f3f5] w-full h-80 rounded-t-lg px-5 py-1'>
                    <p className='text-lg text-gray-500 font-semibold mb-2'>PRICE DETAILS</p>

                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold'>Price(1 item(s))</p>
                        <p className='flex items-center text-lg font-bold'><span><BsCurrencyRupee /></span>500</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold'>Discount</p>
                        <p className='flex items-center text-lg font-bold text-green-600'>-<BsCurrencyRupee />500</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold'>Delivery Charges</p>
                        <p className='flex items-center text-lg font-bold'><BsCurrencyRupee />40</p>
                    </div>
                    <div className='flex justify-between border-t-2 border-b-2 border-dotted border-blue-500'>
                        <p className='text-lg font-semibold'>Total Amount</p>
                        <p className='flex items-center text-lg font-bold'><BsCurrencyRupee />4000</p>
                    </div>
                    <div className='w-full mt-2'><button className='w-full rounded-lg px-2 py-2 bg-[#3d5af1] text-white font-semibold hover:bg-[#775ada]'>Place Order</button></div>

                </div>}
            </div>
        </>
    );
}

export default Cart;
