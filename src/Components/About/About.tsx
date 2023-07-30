import {  type FC } from 'react';

interface AboutProps { }

const About: FC<AboutProps> = () => {

    return (
        <>
            <div className='w-full h-[100vh] flex items-center justify-center bg-[#071a52] text-white'>
               <div className='text-6xl'>Comming Soon!</div>
            </div>
        </>
    );
}

export default About;
