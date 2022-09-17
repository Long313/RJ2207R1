import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Contact2 } from "./Contac2";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
export const Index = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/contact2/123'>Contact2</Link>
                    </li>
                </ul>
                <br/>
                <div className='main router-place'>
                    <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/contact2/:pid' element={<Contact2/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}