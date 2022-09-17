import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";

export default function Garage() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category/>} />
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    )
}