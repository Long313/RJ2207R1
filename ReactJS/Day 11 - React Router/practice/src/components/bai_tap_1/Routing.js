import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
export default function Routing() {
    return (
        <div className="container-fluid">
        <BrowserRouter>
            <div className="containter text-center">
                <Link to='/login' className='btn btn-secondary'>Login</Link>
            </div>
           <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
           </Routes>
        </BrowserRouter>
        </div>
    )
}