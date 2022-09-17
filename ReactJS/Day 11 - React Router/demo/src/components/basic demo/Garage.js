import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";
export const Garage = () => {
    return(
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<Category/>}></Route>
            <Route path='/product/:categoryId' element={<Product/>}></Route>
         </Routes>
        </BrowserRouter>
    )
}