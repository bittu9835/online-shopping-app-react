import { useContext, type FC, useState } from 'react';
import {BsCurrencyRupee} from 'react-icons/bs'
import { MyContext } from '../../Context/Context';
import { toast } from 'react-toastify';
import empty from '../../Assets/img/preview.gif'
import LT1 from '../../Assets/product_Img/LT1.webp'
import LT2 from '../../Assets/product_Img/LT2.webp'
import LT3 from '../../Assets/product_Img/LT3.webp'
import LT4 from '../../Assets/product_Img/LT4.webp'
import LT5 from '../../Assets/product_Img/LT5.webp'
import LT6 from '../../Assets/product_Img/LT6.webp'
import LT7 from '../../Assets/product_Img/LT7.webp'
import LT8 from '../../Assets/product_Img/LT8.webp'
import LT9 from '../../Assets/product_Img/LT9.webp'
import LT10 from '../../Assets/product_Img/LT10.webp'
import mo1 from '../../Assets/product_Img/mo1.webp'
import mo2 from '../../Assets/product_Img/mo2.webp'
import mo3 from '../../Assets/product_Img/mo3.webp'
import mo4 from '../../Assets/product_Img/mo4.webp'
import mo5 from '../../Assets/product_Img/mo5.webp'
import mo6 from '../../Assets/product_Img/mo6.webp'
import tv1 from '../../Assets/product_Img/tv1.webp'
import tv2 from '../../Assets/product_Img/tv2.webp'
import tv3 from '../../Assets/product_Img/tv3.webp'
import tv4 from '../../Assets/product_Img/tv4.webp'
import tv5 from '../../Assets/product_Img/tv5.webp'
import fa1 from '../../Assets/product_Img/fa1.webp'
import fa2 from '../../Assets/product_Img/fa2.webp'
import fa3 from '../../Assets/product_Img/fa3.webp'
import fa4 from '../../Assets/product_Img/fa4.webp'
import fa5 from '../../Assets/product_Img/fa5.webp'
import fa6 from '../../Assets/product_Img/fa6.webp'
import fa7 from '../../Assets/product_Img/fa7.webp'






interface ProductProps { }

interface ProductList {
    id: number;
    name: string;
    price: number;
    imgUrl: any;
    category?: any;
    qty?: number;
};

const Product: FC<ProductProps> = () => {
const {cartData,  setCartData}:any = useContext(MyContext);
const[filter,setFilter]=useState('mobile');
    const productList: ProductList[] = [
        {
            id: 1,
            name: 'DELL Inspiron Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            price: 38999,
            imgUrl:LT1,
            category: 'laptop',
            qty: 1
        },
        {
            id: 2,
            name: 'DELL Core i3 12th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            price: 40999,
            imgUrl:LT2,
            category: 'laptop',
            qty: 1
        },
        {
            id: 3,
            name: 'DELL Ryzen 3 Quad Core 5425U - (8 GB/256 GB SSD/Windows 11 Home) ',
            price: 35770,
            imgUrl:LT3,
            category: 'laptop',
            qty: 1
        },
        {
            id: 4,
            name: 'HP 14s Intel Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home)',
            price: 30999,
            imgUrl:LT4,
            category: 'laptop',
            qty: 1
        },
        {
            id: 5,
            name: 'HP 15s (2023) Intel Core i3 13th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            price: 52000,
            imgUrl:LT5,
            category: 'laptop',
            qty: 1
        },
        {
            id: 6,
            name: ' Inspiron 3520 Thin and Light Laptop  (15.6 Inch, Carbon Black, 1.65 Kg, With MS Office)',
            price: 38500,
            imgUrl:LT6,
            category: 'laptop',
            qty: 1
        },
        {
            id: 7,
            name: 'ASUS Vivobook 14 (2023) Core i3 13th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            price: 45000,
            imgUrl:LT7,
            category: 'laptop',
            qty: 1
        },
        {
            id: 8,
            name: 'Vivobook 14 (2023) Core i3 13th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            price: 52500,
            imgUrl:LT8,
            category: 'laptop',
            qty: 1
        },
        {
            id: 9,
            name: 'HP Pavilion Intel Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            price: 62000,
            imgUrl:LT9,
            category: 'laptop',
            qty: 1
        },
        {
            id: 10,
            name: 'Pavilion Intel Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) ',
            price: 60599,
            imgUrl:LT10,
            category: 'laptop',
            qty: 1
        },
        {
            id: 11,
            name: 'OPPO Reno10 Pro 5G (Silvery Grey, 256 GB)  (12 GB RAM)',
            price: 39999,
            imgUrl:mo1,
            category: 'mobile',
            qty: 1
        },
        {
            id: 12,
            name: 'realme 11 Pro+ 5G (Oasis Green, 256 GB)  (8 GB RAM)',
            price: 27999,
            imgUrl:mo2,
            category: 'mobile',
            qty: 1
        },
        {
            id: 13,
            name: 'OPPO  5G (Silvery Grey, 256 GB)  (12 GB RAM)',
            price: 42500,
            imgUrl:mo3,
            category: 'mobile',
            qty: 1
        },
        {
            id: 14,
            name: 'SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)  (12 GB RAM))',
            price: 124999,
            imgUrl:mo4,
            category: 'mobile',
            qty: 1
        },
        {
            id: 15,
            name: 'APPLE iPhone 14 Pro (Deep Purple, 128 GB)',
            price: 117999,
            imgUrl:mo5,
            category: 'mobile',
            qty: 1
        },
        {
            id: 16,
            name: 'SAMSUNG Galaxy S23 Ultra 5G (Green, 512 GB)  (12 GB RAM',
            price: 134999,
            imgUrl:mo6,
            category: 'mobile',
            qty: 1
        },
        {
            id: 17,
            name: 'MOTOROLA EnvisionX 165 cm (65 inch) QLED Ultra HD (4K)',
            price: 49500,
            imgUrl:tv1,
            category: 'tv',
            qty: 1
        },
        {
            id: 18,
            name: 'Mi X Pro 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV',
            price: 46999,
            imgUrl:tv2,
            category: 'tv',
            qty: 1
        },
        {
            id: 19,
            name: 'SONY 138.8 cm (55 inch) Ultra HD (4K) LED Smart Google TV  (KD-55X74K)',
            price: 57990,
            imgUrl:tv3,
            category: 'tv',
            qty: 1
        },
        {
            id: 20,
            name: 'OnePlus U1S 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV',
            price: 61999,
            imgUrl:tv4,
            category: 'tv',
            qty: 1
        },
        {
            id: 21,
            name: 'SONY 125.7 cm (50 inch) Ultra HD (4K) LED Smart Google TV  (KD-50X64L)',
            price: 54990,
            imgUrl:tv5,
            category: 'tv',
            qty: 1
        },
        {
            id: 22,
            name: 'Men Typography Round Neck Cotton Blend Black T-Shirt',
            price: 199,
            imgUrl:fa1,
            category: 'fashion',
            qty: 1
        },
        {
            id: 23,
            name: 'Pack of 2 Men Typography Round Neck Cotton Blend Black T-Shirt',
            price: 399,
            imgUrl:fa2,
            category: 'fashion',
            qty: 1
        },
        {
            id: 24,
            name: 'Men Solid Black Track Pants',
            price: 369,
            imgUrl:fa3,
            category: 'fashion',
            qty: 1
        },
        {
            id: 25,
            name: 'Men Typography Round Neck Cotton Blend Yellow T-Shirt',
            price: 199,
            imgUrl:fa4,
            category: 'fashion',
            qty: 1
        },
        {
            id: 26,
            name: 'Pack of 2 Men Graphic Print Round Neck Cotton Blend Multicolor T-Shirt',
            price: 269,
            imgUrl:fa5,
            category: 'fashion',
            qty: 1
        },
        {
            id: 27,
            name: 'Flip Flops  (Black 9)',
            price: 299,
            imgUrl:fa6,
            category: 'fashion',
            qty: 1
        },
        {
            id: 28,
            name: 'Men Textured Leather Jacket',
            price: 1499,
            imgUrl:fa7,
            category: 'fashion',
            qty: 1
        },
        // {
        //     id: 29,
        //     name: 'Men Typography Round Neck Cotton Blend Black T-Shirt',
        //     price: 199,
        //     imgUrl:fa1,
        //     category: 'fashion',
        //     qty: 1
        // },
        // {
        //     id: 30,
        //     name: 'Men Typography Round Neck Cotton Blend Black T-Shirt',
        //     price: 199,
        //     imgUrl:fa1,
        //     category: 'fashion',
        //     qty: 1
        // },
        // {
        //     id: 31,
        //     name: 'Men Typography Round Neck Cotton Blend Black T-Shirt',
        //     price: 199,
        //     imgUrl:fa1,
        //     category: 'fashion',
        //     qty: 1
        // },

    ]

    const category =[
        {
            id:1,
            name:'Mobile',
            url:'mobile',
            img:'https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100',
        },
        {
            id:2,
            name:'Fashion',
            url:'fashion',
            img:'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100',
        },
        {
            id:3,
            name:'Grocery',
            url:'grocery',
            img:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100',
        },
        {
            id:4,
            name:'Laptops',
            url:'laptop',
            img:'https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100',
        },
        {
            id:5,
            name:'Electronics',
            url:'tv',
            img:'https://rukminim1.flixcart.com/flap/64/64/image/0ff199d1bd27eb98.png?q=100',
        },

    ]
  //filter data   
    const filteredCategory = productList.filter((proList) => proList.category=== filter);
 //
    const addToCart=(item:any)=>{
        const existingItem = cartData.find((cartItem:any) => cartItem.id === item.id);
        if (existingItem) {
            toast.warning('This item is Existing to Your cart', {
                position: toast.POSITION.TOP_CENTER,
                className: 'bg-orange-500',
                autoClose: 1000,
              });
        }else{
            setCartData([...cartData, item]);

            toast.success('Item added in your cart', {
                position: toast.POSITION.TOP_CENTER,
                className: 'bg-green-500',
                autoClose: 1000,
            });
        }
    
        
    }
    return (
        <>
            <div className="w-full h-full bg-white  mt-16">
                    <div className='mb-2 w-full bg-[#fcefee] py-4  justify-around items-center  flex flex-wrap'>
                {category.map(items =>(
                        <div  key={items.id} onClick={()=>{setFilter(items.url)}} className='cursor-pointer m-2'>
                            <div><img src={items.img} alt="" /></div>
                            <div className={`${filter===items.url ? "border-b-2 border-blue-700" : ''} text-lg font-semibold pb-2`}>{items.name}</div>
                            </div>
                        ))}
                    </div>
                <div className="row flex flex-wrap justify-center w-full gap-6">
                    {filteredCategory.length===0 && 
                       <div className='text-2xl italic font-semibold flex items-center text-red-600 w-full h-full justify-center'>
                        <div className='flex flex-col justify-center'>
                        <img src={empty} alt="" />
                        <p>Nothing items in this Category!</p>
                        </div>
                       </div>
                    }
                    {filteredCategory.map(item => (
                        <div key={item.id} className="card myStyle">
                            <div className='w-full h-[10rem] p-3'>
                                <img className='w-full h-full' src={item.imgUrl} alt="" />
                            </div>
                            <div className='w-full h-[6rem] px-[16px] py-[8px]'>
                                <div className='h-[28px] text-lg font-bold flex items-center'><BsCurrencyRupee/>{item.price}</div>
                                <div className='font-medium text-[#202423] h-12 mb-2 overflow-hidden'>{item.name}</div>
                                <div className='w-full flex justify-around'>
                                    <button onClick={()=>addToCart(item)} className=' rounded-lg px-2 py-[2px] bg-[#3d5af1] text-white font-semibold hover:bg-[#775ada]'>Add To Cart</button>
                                    <button className=' rounded-lg px-2 py-[2px] bg-[#3d5af1] text-white font-semibold hover:bg-[#775ada]'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Product;
