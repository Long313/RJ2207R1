import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import Employee from './Emloyee';
import Login from './Login';
import EmployeeDetail from './EmployeeDetail';
export default function Routing() {
    return (
        <div className='container'>
            <BrowserRouter>
                 <div className='container-routes'>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/employee" element={<Employee/>} />
                        <Route path="/employee_detail/:pid" element={<EmployeeDetail/>} />
                    </Routes>
                 </div>
            </BrowserRouter>
        </div>
    )
}