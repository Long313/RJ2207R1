import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
export default function Employee() {
    const navigate = useNavigate();
    const employees = [
        {id: 1, name:'Hoa', age: 20},
        {id: 2, name: 'Khánh', age: 25},
        {id:3, name: 'Tú', age: 22}
    ]
    const sentData = (data) => {
        console.log(data.id);
        navigate('/employee_detail/'+ data.id,{state: data});
    }
    return (
        <div className='container-table'>
            <h1 className='text-uppercase'>Employee List</h1>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee,index) => (
                        <tr key={index}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>
                                <button type='button' className='btn btn-secondary' onClick={() => sentData(employee)}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}