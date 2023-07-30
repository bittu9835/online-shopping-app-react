import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import Navbar from '../Navbar/Navbar';
interface RouterProps {}

const Router: FC<RouterProps> = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<>Not found page</>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Router;
